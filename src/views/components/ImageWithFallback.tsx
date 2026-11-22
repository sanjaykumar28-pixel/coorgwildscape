import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

const DEFAULT_OBJECT_POSITIONS: Record<string, string> = {
  '/assets/aistudio/glass_bridge_1d241e01.jpg': 'center 45%',
  '/assets/aistudio/WhatsApp_Image_2026-11-19_at_7.13.52_PM_1b6101d7.jpeg': 'center 42%',
};

export function ImageWithFallback({
  src,
  alt,
  className = '',
  objectPosition,
  priority = false,
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedObjectPosition = objectPosition || DEFAULT_OBJECT_POSITIONS[src] || 'center center';

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#18261D] via-[#101A14] to-[#0C140F] text-[#A6B0A8] p-6 text-center ${className}`}
      >
        <Mountain className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
        <span className="font-display text-lg text-[#F2F1EC]">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      style={{ objectPosition: resolvedObjectPosition }}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
