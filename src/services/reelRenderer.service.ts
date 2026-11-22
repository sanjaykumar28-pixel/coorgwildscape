import { BUSINESS_CONFIG } from '../config/business';
import { ReelAspectRatio, ReelScene } from '../models/reel.model';

export const OUTRO_DURATION_SEC = 2.4;
const CROSSFADE_SEC = 0.55;

export interface ExportedReelResult {
  blob: Blob;
  url: string;
  mimeType: string;
  extension: string;
}

export function getReelDimensions(aspectRatio: ReelAspectRatio): {
  width: number;
  height: number;
} {
  return aspectRatio === '16:9'
    ? { width: 1280, height: 720 }
    : { width: 720, height: 1280 };
}

export function getTotalDurationSec(scenes: ReelScene[]): number {
  const active = scenes.filter((s) => s.enabled);
  if (active.length === 0) return 0;
  return active.reduce((sum, s) => sum + s.durationSec, 0) + OUTRO_DURATION_SEC;
}

export async function preloadSceneImages(
  scenes: ReelScene[]
): Promise<Map<string, HTMLImageElement>> {
  const map = new Map<string, HTMLImageElement>();
  const uniqueUrls = Array.from(new Set(scenes.map((s) => s.image)));

  await Promise.all(
    uniqueUrls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            map.set(src, img);
            resolve();
          };
          img.onerror = () => {
            resolve();
          };
          img.src = src;
        })
    )
  );

  return map;
}

function drawCoverImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
  progress: number,
  motion: ReelScene['motion']
) {
  const imgRatio = img.naturalWidth / img.naturalHeight || 16 / 9;
  const canvasRatio = canvasWidth / canvasHeight;

  let baseW = canvasWidth;
  let baseH = canvasHeight;

  if (imgRatio > canvasRatio) {
    baseH = canvasHeight;
    baseW = canvasHeight * imgRatio;
  } else {
    baseW = canvasWidth;
    baseH = canvasWidth / imgRatio;
  }

  let scale = 1.06;
  let offsetX = 0;
  let offsetY = 0;
  const eased = 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, progress)));

  if (motion === 'zoom-in') {
    scale = 1.02 + eased * 0.12;
  } else if (motion === 'zoom-out') {
    scale = 1.14 - eased * 0.11;
  } else if (motion === 'pan-left') {
    scale = 1.12;
    offsetX = (0.5 - eased) * canvasWidth * 0.08;
  } else if (motion === 'pan-right') {
    scale = 1.12;
    offsetX = (eased - 0.5) * canvasWidth * 0.08;
  }

  const drawW = baseW * scale;
  const drawH = baseH * scale;
  const dx = (canvasWidth - drawW) / 2 + offsetX;
  const dy = (canvasHeight - drawH) / 2 + offsetY;

  ctx.drawImage(img, dx, dy, drawW, drawH);
}

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function drawSceneOverlay(
  ctx: CanvasRenderingContext2D,
  scene: ReelScene,
  width: number,
  height: number,
  alpha: number,
  isPortrait: boolean
) {
  if (alpha <= 0.01) return;
  ctx.save();
  ctx.globalAlpha = alpha;

  const scrim = ctx.createLinearGradient(0, height * 0.35, 0, height);
  scrim.addColorStop(0, 'rgba(12, 20, 15, 0)');
  scrim.addColorStop(0.55, 'rgba(12, 20, 15, 0.58)');
  scrim.addColorStop(1, 'rgba(12, 20, 15, 0.92)');
  ctx.fillStyle = scrim;
  ctx.fillRect(0, 0, width, height);

  const padX = isPortrait ? 52 : 76;
  const bottomPad = isPortrait ? 110 : 72;
  const maxTextWidth = width - padX * 2;

  // Subtitle at bottom
  const subFontSize = isPortrait ? 24 : 22;
  ctx.font = `500 ${subFontSize}px "Plus Jakarta Sans", system-ui, sans-serif`;
  ctx.fillStyle = '#D4DBD6';
  const subLines = wrapLines(ctx, scene.subtitle, maxTextWidth);
  const subLineHeight = subFontSize * 1.35;
  const subBlockHeight = subLines.length * subLineHeight;

  // Title above subtitle
  const titleFontSize = isPortrait ? 54 : 62;
  ctx.font = `600 ${titleFontSize}px "Cormorant Garamond", Georgia, serif`;
  const titleLines = wrapLines(ctx, scene.title, maxTextWidth);
  const titleLineHeight = titleFontSize * 1.08;
  const titleBlockHeight = titleLines.length * titleLineHeight;

  const gapTitleSub = 16;
  const gapEyebrowTitle = 16;
  const eyebrowY = height - bottomPad - subBlockHeight - gapTitleSub - titleBlockHeight - gapEyebrowTitle;

  // Eyebrow
  ctx.font = `600 ${isPortrait ? 16 : 15}px "Plus Jakarta Sans", system-ui, sans-serif`;
  ctx.fillStyle = '#E88554';
  ctx.fillText(scene.eyebrow.toUpperCase(), padX, eyebrowY);

  // Title lines
  ctx.font = `600 ${titleFontSize}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillStyle = '#F2F1EC';
  titleLines.forEach((line, idx) => {
    const y = eyebrowY + gapEyebrowTitle + titleLineHeight * (idx + 0.85);
    ctx.fillText(line, padX, y);
  });

  // Subtitle lines
  ctx.font = `400 ${subFontSize}px "Plus Jakarta Sans", system-ui, sans-serif`;
  ctx.fillStyle = '#C8D1CA';
  subLines.forEach((line, idx) => {
    const y =
      eyebrowY +
      gapEyebrowTitle +
      titleBlockHeight +
      gapTitleSub +
      subLineHeight * (idx + 0.85);
    ctx.fillText(line, padX, y);
  });

  // Top corner watermark brand mark
  ctx.font = `600 ${isPortrait ? 18 : 16}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillStyle = 'rgba(242, 241, 236, 0.85)';
  ctx.fillText(BUSINESS_CONFIG.shortMark, padX, isPortrait ? 58 : 48);

  ctx.restore();
}

function drawOutroCard(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  progress: number,
  isPortrait: boolean
) {
  ctx.save();
  const fade = Math.min(1, progress / 0.25);
  ctx.globalAlpha = fade;

  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.45,
    40,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.75
  );
  grad.addColorStop(0, '#18281E');
  grad.addColorStop(1, '#080E0A');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  ctx.textAlign = 'center';

  // Eyebrow
  ctx.font = `600 ${isPortrait ? 16 : 15}px "Plus Jakarta Sans", system-ui, sans-serif`;
  ctx.fillStyle = '#E88554';
  ctx.fillText('KODAGU · KARNATAKA', width / 2, height / 2 - (isPortrait ? 90 : 72));

  // Brand title
  ctx.font = `600 ${isPortrait ? 58 : 68}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillStyle = '#F2F1EC';
  ctx.fillText(BUSINESS_CONFIG.shortMark, width / 2, height / 2 - 8);

  // Accent hairline
  ctx.fillStyle = '#D95D24';
  ctx.fillRect(width / 2 - 44, height / 2 + 18, 88, 2);

  // Tagline
  ctx.font = `400 ${isPortrait ? 22 : 20}px "Plus Jakarta Sans", system-ui, sans-serif`;
  ctx.fillStyle = '#D4DBD6';
  ctx.fillText(
    'Explore Destinations · 4x4 Jeep Safaris · Nature Stays',
    width / 2,
    height / 2 + 64
  );

  ctx.textAlign = 'left';
  ctx.restore();
}

export function drawReelFrame(
  ctx: CanvasRenderingContext2D,
  scenes: ReelScene[],
  images: Map<string, HTMLImageElement>,
  aspectRatio: ReelAspectRatio,
  elapsedSec: number
): void {
  const { width, height } = getReelDimensions(aspectRatio);
  const isPortrait = aspectRatio === '9:16';
  const activeScenes = scenes.filter((s) => s.enabled);

  ctx.fillStyle = '#0C140F';
  ctx.fillRect(0, 0, width, height);

  if (activeScenes.length === 0) return;

  const totalSec = getTotalDurationSec(activeScenes);
  const t = Math.max(0, Math.min(elapsedSec, totalSec));

  // Compute scene start/end times
  let cursor = 0;
  const timeline = activeScenes.map((scene) => {
    const start = cursor;
    const end = cursor + scene.durationSec;
    cursor = end;
    return { scene, start, end };
  });

  const outroStart = cursor;

  if (t >= outroStart) {
    const lastEntry = timeline[timeline.length - 1];
    const outroElapsed = t - outroStart;
    if (outroElapsed < CROSSFADE_SEC && lastEntry) {
      const img = images.get(lastEntry.scene.image);
      if (img) {
        drawCoverImage(ctx, img, width, height, 1, lastEntry.scene.motion);
      }
      drawSceneOverlay(
        ctx,
        lastEntry.scene,
        width,
        height,
        1 - outroElapsed / CROSSFADE_SEC,
        isPortrait
      );
    }
    drawOutroCard(ctx, width, height, outroElapsed / OUTRO_DURATION_SEC, isPortrait);
  } else {
    const currentIndex = timeline.findIndex((entry) => t >= entry.start && t < entry.end);
    const activeIdx = currentIndex === -1 ? timeline.length - 1 : currentIndex;
    const current = timeline[activeIdx];
    const sceneLocalSec = t - current.start;
    const sceneProgress = sceneLocalSec / current.scene.durationSec;

    const currentImg = images.get(current.scene.image);
    if (currentImg) {
      drawCoverImage(ctx, currentImg, width, height, sceneProgress, current.scene.motion);
    }
    drawSceneOverlay(ctx, current.scene, width, height, 1, isPortrait);

    // Crossfade transition into next scene
    const timeRemaining = current.end - t;
    if (timeRemaining < CROSSFADE_SEC && activeIdx + 1 < timeline.length) {
      const next = timeline[activeIdx + 1];
      const blend = 1 - timeRemaining / CROSSFADE_SEC;
      ctx.save();
      ctx.globalAlpha = blend;
      const nextImg = images.get(next.scene.image);
      if (nextImg) {
        drawCoverImage(ctx, nextImg, width, height, 0, next.scene.motion);
      }
      ctx.restore();
      drawSceneOverlay(ctx, next.scene, width, height, blend, isPortrait);
    }
  }

  // Subtle bottom progress hairline
  const overallProgress = totalSec > 0 ? t / totalSec : 0;
  ctx.fillStyle = 'rgba(242, 241, 236, 0.16)';
  ctx.fillRect(0, height - 5, width, 5);
  ctx.fillStyle = '#D95D24';
  ctx.fillRect(0, height - 5, width * overallProgress, 5);
}

export function isMediaRecorderSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof MediaRecorder !== 'undefined' &&
    typeof HTMLCanvasElement !== 'undefined' &&
    typeof HTMLCanvasElement.prototype.captureStream === 'function'
  );
}

function selectSupportedMimeType(): string {
  const candidates = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm',
    'video/mp4',
  ];
  for (const mime of candidates) {
    if (MediaRecorder.isTypeSupported(mime)) {
      return mime;
    }
  }
  return '';
}

export async function exportReelVideo(
  scenes: ReelScene[],
  aspectRatio: ReelAspectRatio,
  onProgress: (percent: number) => void,
  signal?: AbortSignal
): Promise<ExportedReelResult> {
  if (!isMediaRecorderSupported()) {
    throw new Error(
      'Your browser does not support in-browser video recording (MediaRecorder / captureStream).'
    );
  }

  const activeScenes = scenes.filter((s) => s.enabled);
  if (activeScenes.length === 0) {
    throw new Error('Enable at least one scene before exporting.');
  }

  const { width, height } = getReelDimensions(aspectRatio);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not initialize 2D canvas context.');
  }

  const images = await preloadSceneImages(activeScenes);
  const totalSec = getTotalDurationSec(activeScenes);
  const mimeType = selectSupportedMimeType();

  const stream = canvas.captureStream(30);
  const recorder = new MediaRecorder(
    stream,
    mimeType
      ? { mimeType, videoBitsPerSecond: 4_500_000 }
      : { videoBitsPerSecond: 4_500_000 }
  );

  const chunks: BlobPart[] = [];
  recorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  return new Promise<ExportedReelResult>((resolve, reject) => {
    let rafId = 0;
    let aborted = false;

    const cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      stream.getTracks().forEach((track) => track.stop());
    };

    if (signal) {
      signal.addEventListener(
        'abort',
        () => {
          aborted = true;
          cleanup();
          if (recorder.state !== 'inactive') {
            recorder.stop();
          }
          reject(new Error('Video export was cancelled.'));
        },
        { once: true }
      );
    }

    recorder.onerror = () => {
      cleanup();
      reject(new Error('Failed while encoding video frames.'));
    };

    recorder.onstop = () => {
      cleanup();
      if (aborted) return;
      const finalMime = recorder.mimeType || mimeType || 'video/webm';
      const blob = new Blob(chunks, { type: finalMime });
      const url = URL.createObjectURL(blob);
      const extension = finalMime.includes('mp4') ? 'mp4' : 'webm';
      onProgress(100);
      resolve({ blob, url, mimeType: finalMime, extension });
    };

    // Draw initial frame before starting recorder
    drawReelFrame(ctx, activeScenes, images, aspectRatio, 0);
    recorder.start(200);

    const startTime = performance.now();
    const renderTick = (now: number) => {
      if (aborted) return;
      const elapsedSec = (now - startTime) / 1000;
      drawReelFrame(ctx, activeScenes, images, aspectRatio, elapsedSec);

      const pct = Math.min(99, Math.round((elapsedSec / totalSec) * 100));
      onProgress(pct);

      if (elapsedSec >= totalSec) {
        if (recorder.state !== 'inactive') {
          recorder.stop();
        }
        return;
      }

      rafId = requestAnimationFrame(renderTick);
    };

    rafId = requestAnimationFrame(renderTick);
  });
}
