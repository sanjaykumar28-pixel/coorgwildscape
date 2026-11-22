import { ExternalLink, MessageCircle } from 'lucide-react';
import { HiddenPlace } from '../../models/hiddenPlace.model';
import { getHiddenPlaceEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from './ImageWithFallback';

interface HiddenPlaceCardProps {
  place: HiddenPlace;
  showExtended?: boolean;
}

export function HiddenPlaceCard({ place, showExtended = false }: HiddenPlaceCardProps) {
  return (
    <article className="group flex h-full w-full flex-col bg-[#111A14] border border-[#F2F1EC]/10 rounded-sm overflow-hidden transition-colors hover:border-[#F2F1EC]/25">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#0A100C]">
        <ImageWithFallback
          src={place.image}
          alt={`${place.name} — hidden destination in ${place.location}`}
          objectPosition={place.imagePosition}
          fallbackTitle={place.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111A14]/75 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-[#9BA69E] mb-2 min-w-0">
          <span className="font-medium text-[#E88554] shrink-0">{place.category}</span>
          <span aria-hidden="true" className="shrink-0">·</span>
          <span className="truncate">{place.location}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-[#F2F1EC] leading-snug line-clamp-2 min-h-[4.125rem]">
          {place.name}
        </h3>

        <p
          className={`mt-2.5 text-sm text-[#B8C2BA] leading-relaxed ${
            showExtended ? 'line-clamp-4 min-h-[5.7rem]' : 'line-clamp-3 min-h-[4.265rem]'
          }`}
        >
          {showExtended ? place.description : place.shortDescription}
        </p>

        <div className="mt-4 pt-3 border-t border-[#F2F1EC]/8">
          <p className="text-xs text-[#8E9B91] leading-relaxed line-clamp-3 min-h-[3.65rem]">
            <span className="text-[#D4DBD6] font-medium">Access note:</span>{' '}
            {place.accessInformation}
          </p>
        </div>

        <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4DBD6] hover:text-white transition-colors whitespace-nowrap"
          >
            View on Maps
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <a
            href={getHiddenPlaceEnquiryUrl(place.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E88554] hover:text-white transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Enquire Access
          </a>
        </div>
      </div>
    </article>
  );
}
