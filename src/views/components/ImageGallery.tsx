import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryItem } from '../../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ImageGalleryProps {
  items: GalleryItem[];
  theme?: 'light' | 'dark';
}

export function ImageGallery({ items, theme = 'light' }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isDark = theme === 'dark';

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + items.length) % items.length));
  }, [items.length]);
  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => {
          const spanClass =
            idx === 0
              ? 'lg:col-span-2 lg:aspect-[16/9]'
              : idx === 3
                ? 'lg:col-span-2 lg:aspect-[16/9]'
                : 'aspect-[4/3]';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative overflow-hidden rounded-sm text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95D24] ${spanClass} ${
                isDark ? 'bg-[#131E17]' : 'bg-[#161B17]'
              }`}
            >
              <ImageWithFallback
                src={item.image}
                alt={`${item.title} — ${item.location}`}
                objectPosition={item.imagePosition}
                fallbackTitle={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/85 via-[#0C140F]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#E88554] mb-1">
                  {item.category} · {item.location}
                </p>
                <p className="font-display text-xl sm:text-2xl font-medium text-[#F2F1EC]">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#080E0A]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
          onClick={close}
        >
          <div
            className="flex items-center justify-between text-[#F2F1EC]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#E88554]">
                {activeItem.category} · {activeItem.location}
              </p>
              <h3 className="font-display text-2xl font-semibold mt-0.5">{activeItem.title}</h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery viewer"
              className="p-2.5 rounded-sm border border-[#F2F1EC]/20 text-[#F2F1EC] hover:bg-[#F2F1EC]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center my-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="hidden sm:flex items-center justify-center w-11 h-11 rounded-sm border border-[#F2F1EC]/20 bg-[#0C140F]/80 text-[#F2F1EC] hover:border-[#E88554] mr-4 cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] max-w-5xl w-full flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-sm"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="hidden sm:flex items-center justify-center w-11 h-11 rounded-sm border border-[#F2F1EC]/20 bg-[#0C140F]/80 text-[#F2F1EC] hover:border-[#E88554] ml-4 cursor-pointer shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#F2F1EC]/15 pt-4 text-sm text-[#B8C2BA]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="max-w-2xl">{activeItem.caption}</p>
            <div className="flex items-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={showPrev}
                className="px-3.5 py-2 border border-[#F2F1EC]/20 rounded-sm text-xs text-[#F2F1EC]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={showNext}
                className="px-3.5 py-2 border border-[#F2F1EC]/20 rounded-sm text-xs text-[#F2F1EC]"
              >
                Next
              </button>
            </div>
            <span className="font-mono-tabular text-xs text-[#8E9B91]">
              {(activeIndex ?? 0) + 1} / {items.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
