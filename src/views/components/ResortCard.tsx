import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Resort } from '../../models/resort.model';
import { getResortEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from './ImageWithFallback';

interface ResortCardProps {
  resort: Resort;
}

export function ResortCard({ resort }: ResortCardProps) {
  return (
    <article className="group flex h-full w-full flex-col bg-white border border-[#161B17]/10 rounded-sm overflow-hidden transition-colors hover:border-[#161B17]/25">
      <Link
        to={`/resorts/${resort.slug}`}
        className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#121C16] block"
      >
        <ImageWithFallback
          src={resort.heroImage}
          alt={`${resort.name} – ${resort.category} in ${resort.location}`}
          objectPosition={resort.imagePosition}
          fallbackTitle={resort.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-[#525B53] mb-2 min-w-0">
          <span className="font-medium text-[#D95D24] shrink-0">{resort.category}</span>
          <span aria-hidden="true" className="shrink-0">·</span>
          <span className="truncate">{resort.location}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-[#161B17] leading-snug line-clamp-2 min-h-[4.125rem]">
          <Link to={`/resorts/${resort.slug}`} className="hover:text-[#D95D24] transition-colors">
            {resort.name}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm text-[#4E5850] leading-relaxed line-clamp-3 min-h-[4.265rem]">
          {resort.shortDescription}
        </p>

        <p className="mt-3 mb-5 text-xs text-[#525B53] leading-relaxed truncate">
          {resort.amenities.slice(0, 3).join(' · ')}
        </p>

        <div className="mt-auto pt-5 border-t border-[#161B17]/8 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/resorts/${resort.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#161B17] hover:text-[#D95D24] transition-colors whitespace-nowrap"
          >
            View Stay
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <a
            href={getResortEnquiryUrl(resort.name, resort.location)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F4D36] hover:text-[#D95D24] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
