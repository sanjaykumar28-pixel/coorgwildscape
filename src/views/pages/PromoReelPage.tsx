import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Download,
  Film,
  MessageCircle,
  Pause,
  Play,
  RotateCcw,
  Video,
} from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { REEL_PRESETS } from '../../data/reelPresets';
import { ReelAspectRatio, ReelScene } from '../../models/reel.model';
import {
  drawReelFrame,
  ExportedReelResult,
  exportReelVideo,
  getReelDimensions,
  getTotalDurationSec,
  isMediaRecorderSupported,
  preloadSceneImages,
} from '../../services/reelRenderer.service';
import { buildWhatsAppUrl } from '../../services/whatsapp.service';

export function PromoReelPage() {
  useDocumentTitle(
    'Promo Video Studio – Coorg Wildscape Reel Generator',
    'Create and download a 16:9 widescreen or 9:16 vertical promotional video reel featuring Coorg destinations and 4x4 jeep trails.'
  );

  const [presetId, setPresetId] = useState(REEL_PRESETS[0].id);
  const [scenes, setScenes] = useState<ReelScene[]>(() =>
    REEL_PRESETS[0].scenes.map((s) => ({ ...s }))
  );
  const [aspectRatio, setAspectRatio] = useState<ReelAspectRatio>('16:9');
  const [selectedSceneId, setSelectedSceneId] = useState<string>(REEL_PRESETS[0].scenes[0].id);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const [imagesReady, setImagesReady] = useState(false);

  // Export state
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportError, setExportError] = useState<string | null>(null);
  const [exportedVideo, setExportedVideo] = useState<ExportedReelResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const activeScenes = useMemo(() => scenes.filter((s) => s.enabled), [scenes]);
  const totalDurationSec = useMemo(() => getTotalDurationSec(activeScenes), [activeScenes]);
  const { width, height } = getReelDimensions(aspectRatio);
  const recorderSupported = isMediaRecorderSupported();

  // Preload images whenever scenes change
  useEffect(() => {
    let active = true;
    preloadSceneImages(scenes).then((loaded) => {
      if (!active) return;
      imagesRef.current = loaded;
      setImagesReady(true);
    });
    return () => {
      active = false;
    };
  }, [scenes]);

  // Cleanup exported object URL on unmount or replacement
  useEffect(() => {
    return () => {
      if (exportedVideo?.url) {
        URL.revokeObjectURL(exportedVideo.url);
      }
    };
  }, [exportedVideo]);

  // Live Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesReady) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawReelFrame(ctx, activeScenes, imagesRef.current, aspectRatio, currentTimeSec);

    if (!isPlaying || totalDurationSec <= 0) return;

    let rafId = 0;
    let lastNow = performance.now();

    const step = (now: number) => {
      const dt = (now - lastNow) / 1000;
      lastNow = now;

      setCurrentTimeSec((prev) => {
        const next = prev + dt;
        const wrapped = next >= totalDurationSec ? 0 : next;
        drawReelFrame(ctx, activeScenes, imagesRef.current, aspectRatio, wrapped);
        return wrapped;
      });

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [activeScenes, aspectRatio, imagesReady, isPlaying, totalDurationSec]);

  // Draw immediately when scrubbing while paused
  useEffect(() => {
    if (isPlaying || !imagesReady) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      drawReelFrame(ctx, activeScenes, imagesRef.current, aspectRatio, currentTimeSec);
    }
  }, [currentTimeSec, isPlaying, activeScenes, aspectRatio, imagesReady]);

  const handleSelectPreset = (id: string) => {
    const found = REEL_PRESETS.find((p) => p.id === id);
    if (!found) return;
    setPresetId(id);
    const cloned = found.scenes.map((s) => ({ ...s }));
    setScenes(cloned);
    setSelectedSceneId(cloned[0]?.id ?? '');
    setCurrentTimeSec(0);
    setIsPlaying(true);
  };

  const updateScene = (id: string, patch: Partial<ReelScene>) => {
    setScenes((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };

  const moveScene = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= scenes.length) return;
    setScenes((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[target];
      next[target] = temp;
      return next;
    });
  };

  const handleExport = async () => {
    setExportError(null);
    if (exportedVideo?.url) {
      URL.revokeObjectURL(exportedVideo.url);
      setExportedVideo(null);
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setIsExporting(true);
    setExportProgress(0);
    setIsPlaying(false);

    try {
      const result = await exportReelVideo(
        activeScenes,
        aspectRatio,
        (pct) => setExportProgress(pct),
        controller.signal
      );
      setExportedVideo(result);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to export video.';
      setExportError(msg);
    } finally {
      setIsExporting(false);
      abortRef.current = null;
    }
  };

  const handleCancelExport = () => {
    abortRef.current?.abort();
  };

  const selectedScene = scenes.find((s) => s.id === selectedSceneId) ?? scenes[0];

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-36 sm:pb-14 bg-[#0C140F] text-[#F2F1EC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E88554] mb-3">
            In-Browser Reel Studio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.08] max-w-3xl display-balance">
            Generate a Coorg Promotional Video
          </h1>
          <p className="mt-3 text-base text-[#B8C2BA] max-w-2xl leading-relaxed">
            Preview and export a smooth 16:9 widescreen or 9:16 vertical reel directly in your
            browser using your real Coorg mountain, waterfall, estate, and 4x4 Jeep imagery.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Canvas Stage & Exported Video Output */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0C140F] border border-[#161B17]/15 rounded-sm p-4 sm:p-6 text-[#F2F1EC]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-[#A6B0A8]">
                  <Film className="w-4 h-4 text-[#E88554]" aria-hidden="true" />
                  <span>
                    Live Preview · {aspectRatio} ({width}×{height})
                  </span>
                </div>

                {/* Aspect Ratio Switch */}
                <div className="flex items-center gap-1 p-1 bg-[#131E17] border border-[#F2F1EC]/10 rounded-sm">
                  {(['16:9', '9:16'] as ReelAspectRatio[]).map((ratio) => (
                    <button
                      key={ratio}
                      type="button"
                      onClick={() => setAspectRatio(ratio)}
                      disabled={isExporting}
                      className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                        aspectRatio === ratio
                          ? 'bg-[#D95D24] text-white'
                          : 'text-[#A6B0A8] hover:text-white'
                      }`}
                    >
                      {ratio === '16:9' ? '16:9 Landscape' : '9:16 Vertical'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas Viewport */}
              <div className="w-full bg-[#080E0A] rounded-sm overflow-hidden flex items-center justify-center p-2">
                <canvas
                  ref={canvasRef}
                  width={width}
                  height={height}
                  className={
                    aspectRatio === '16:9'
                      ? 'w-full aspect-video object-contain rounded-sm'
                      : 'h-[480px] sm:h-[540px] w-auto aspect-[9/16] object-contain rounded-sm'
                  }
                />
              </div>

              {/* Playback Scrubber & Transport */}
              <div className="mt-4 space-y-3">
                <input
                  type="range"
                  min={0}
                  max={Math.max(0.1, totalDurationSec)}
                  step={0.05}
                  value={Math.min(currentTimeSec, totalDurationSec)}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setCurrentTimeSec(Number(e.target.value));
                  }}
                  aria-label="Scrub video timeline"
                  className="w-full accent-[#D95D24] cursor-pointer"
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      disabled={activeScenes.length === 0 || isExporting}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#1A281F] hover:bg-[#24372B] text-xs font-semibold text-white cursor-pointer disabled:opacity-50"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" aria-hidden="true" />
                          Play
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setCurrentTimeSec(0);
                        setIsPlaying(true);
                      }}
                      disabled={activeScenes.length === 0 || isExporting}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-[#F2F1EC]/20 hover:border-white text-xs text-[#D4DBD6] cursor-pointer disabled:opacity-50"
                    >
                      <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                      Restart
                    </button>

                    <span className="font-mono-tabular text-xs text-[#A6B0A8] ml-2">
                      {currentTimeSec.toFixed(1)}s / {totalDurationSec.toFixed(1)}s
                    </span>
                  </div>

                  {!isExporting ? (
                    <button
                      type="button"
                      onClick={handleExport}
                      disabled={activeScenes.length === 0 || !recorderSupported}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Video className="w-4 h-4" aria-hidden="true" />
                      Export Video ({aspectRatio})
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCancelExport}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-[#E88554] text-[#E88554] text-xs font-semibold uppercase tracking-[0.12em] cursor-pointer"
                    >
                      Cancel ({exportProgress}%)
                    </button>
                  )}
                </div>

                {isExporting && (
                  <div className="pt-2">
                    <div className="h-1.5 w-full bg-[#131E17] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D95D24] transition-all duration-200"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-[#A6B0A8]">
                      Rendering real-time video stream in browser ({exportProgress}%) — keep this tab active until finished.
                    </p>
                  </div>
                )}

                {!recorderSupported && (
                  <p className="text-xs text-[#E88554] pt-1">
                    Video file export requires MediaRecorder + canvas.captureStream support (available in Chrome, Edge, and Firefox desktop/Android).
                  </p>
                )}

                {exportError && (
                  <p className="text-xs text-[#FCA5A5] pt-1">{exportError}</p>
                )}
              </div>
            </div>

            {/* Exported Video Player + Download */}
            {exportedVideo && (
              <div className="bg-white border border-[#161B17]/15 rounded-sm p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F4D36]">
                      Video Ready
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-[#161B17]">
                      Your Coorg Wildscape Reel ({aspectRatio})
                    </h2>
                  </div>
                  <a
                    href={exportedVideo.url}
                    download={`coorg-wildscape-${aspectRatio.replace(':', 'x')}.${exportedVideo.extension}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#161B17] hover:bg-[#D95D24] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download .{exportedVideo.extension.toUpperCase()}
                  </a>
                </div>

                <video
                  src={exportedVideo.url}
                  controls
                  playsInline
                  className={`w-full rounded-sm bg-[#0C140F] ${
                    aspectRatio === '9:16' ? 'max-h-[480px] mx-auto w-auto' : 'aspect-video'
                  }`}
                />
              </div>
            )}
          </div>

          {/* Right Column: Storyboard Presets & Scene Customizer */}
          <div className="lg:col-span-5 space-y-6">
            {/* Storyboard Preset Selector */}
            <div className="bg-white border border-[#161B17]/10 rounded-sm p-6 space-y-4">
              <h2 className="font-display text-2xl font-semibold text-[#161B17]">
                1. Choose Storyboard Theme
              </h2>
              <div className="space-y-2.5">
                {REEL_PRESETS.map((preset) => {
                  const isActive = preset.id === presetId;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset.id)}
                      disabled={isExporting}
                      className={`w-full text-left p-4 rounded-sm border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#161B17] border-[#161B17] text-[#F7F6F2]'
                          : 'bg-[#F7F6F2] border-[#161B17]/10 text-[#161B17] hover:border-[#161B17]/35'
                      }`}
                    >
                      <p className="font-semibold text-sm">{preset.name}</p>
                      <p
                        className={`mt-1 text-xs leading-relaxed ${
                          isActive ? 'text-[#C8D1CA]' : 'text-[#525B53]'
                        }`}
                      >
                        {preset.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scene List & Text Customizer */}
            <div className="bg-white border border-[#161B17]/10 rounded-sm p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold text-[#161B17]">
                  2. Customize Scenes
                </h2>
                <span className="font-mono-tabular text-xs text-[#525B53]">
                  {activeScenes.length} active
                </span>
              </div>

              <div className="space-y-2">
                {scenes.map((scene, index) => {
                  const isSelected = selectedScene?.id === scene.id;
                  return (
                    <div
                      key={scene.id}
                      className={`flex items-center gap-3 p-2.5 rounded-sm border transition-colors ${
                        isSelected
                          ? 'border-[#D95D24] bg-[#FFF8F5]'
                          : 'border-[#161B17]/10 bg-[#F7F6F2]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={scene.enabled}
                        onChange={(e) =>
                          updateScene(scene.id, { enabled: e.target.checked })
                        }
                        aria-label={`Include scene ${scene.title}`}
                        className="accent-[#D95D24] w-4 h-4 shrink-0 cursor-pointer"
                      />

                      <button
                        type="button"
                        onClick={() => setSelectedSceneId(scene.id)}
                        className="flex-1 flex items-center gap-3 text-left min-w-0 cursor-pointer"
                      >
                        <img
                          src={scene.image}
                          alt={scene.title}
                          className="w-12 h-9 object-cover rounded-sm shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#161B17] truncate">
                            {scene.title}
                          </p>
                          <p className="font-mono-tabular text-[11px] text-[#525B53]">
                            {scene.durationSec.toFixed(1)}s · {scene.motion}
                          </p>
                        </div>
                      </button>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => moveScene(index, -1)}
                          disabled={index === 0 || isExporting}
                          aria-label="Move scene up"
                          className="p-1 text-[#525B53] hover:text-[#161B17] disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveScene(index, 1)}
                          disabled={index === scenes.length - 1 || isExporting}
                          aria-label="Move scene down"
                          className="p-1 text-[#525B53] hover:text-[#161B17] disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedScene && (
                <div className="pt-4 border-t border-[#161B17]/10 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D95D24]">
                    Edit Selected Scene Caption
                  </p>
                  <div>
                    <label
                      htmlFor="scene-eyebrow"
                      className="block text-xs font-medium text-[#525B53] mb-1"
                    >
                      Eyebrow Label
                    </label>
                    <input
                      id="scene-eyebrow"
                      type="text"
                      value={selectedScene.eyebrow}
                      onChange={(e) =>
                        updateScene(selectedScene.id, { eyebrow: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="scene-title"
                      className="block text-xs font-medium text-[#525B53] mb-1"
                    >
                      Headline
                    </label>
                    <input
                      id="scene-title"
                      type="text"
                      value={selectedScene.title}
                      onChange={(e) =>
                        updateScene(selectedScene.id, { title: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="scene-subtitle"
                      className="block text-xs font-medium text-[#525B53] mb-1"
                    >
                      Location / Subtitle
                    </label>
                    <input
                      id="scene-subtitle"
                      type="text"
                      value={selectedScene.subtitle}
                      onChange={(e) =>
                        updateScene(selectedScene.id, { subtitle: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="scene-duration"
                        className="block text-xs font-medium text-[#525B53] mb-1"
                      >
                        Duration ({selectedScene.durationSec.toFixed(1)}s)
                      </label>
                      <input
                        id="scene-duration"
                        type="range"
                        min={2}
                        max={6}
                        step={0.5}
                        value={selectedScene.durationSec}
                        onChange={(e) =>
                          updateScene(selectedScene.id, {
                            durationSec: Number(e.target.value),
                          })
                        }
                        className="w-full accent-[#D95D24]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="scene-motion"
                        className="block text-xs font-medium text-[#525B53] mb-1"
                      >
                        Camera Motion
                      </label>
                      <select
                        id="scene-motion"
                        value={selectedScene.motion}
                        onChange={(e) =>
                          updateScene(selectedScene.id, {
                            motion: e.target.value as ReelScene['motion'],
                          })
                        }
                        className="w-full px-2.5 py-1.5 text-xs bg-[#F7F6F2] border border-[#161B17]/15 rounded-sm"
                      >
                        <option value="zoom-in">Slow Zoom In</option>
                        <option value="zoom-out">Slow Zoom Out</option>
                        <option value="pan-left">Pan Left</option>
                        <option value="pan-right">Pan Right</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#161B17]/10">
                <a
                  href={buildWhatsAppUrl(
                    'Hello Coorg Wildscape, I created a promotional reel for our upcoming Coorg trip and would like to plan this itinerary!'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#1F4D36] hover:bg-[#163827] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Enquire About Featured Places
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
