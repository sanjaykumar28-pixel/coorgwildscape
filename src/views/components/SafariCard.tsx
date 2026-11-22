import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Safari } from '../../models/safari.model';
import { getSafariEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from './ImageWithFallback';

interface SafariCardProps {
  safari: Safari;
  featuredWide?: boolean;
}

export function SafariCard({ safari, featuredWide = false }: SafariCardProps) {
  return (
    <article
      className={`group flex h-full w-full flex-col bg-[#131E17] border border-[#F2F1EC]/12 rounded-sm overflow-hidden transition-colors hover:border-[#D95D24]/60 ${
        featuredWide ? 'lg:grid lg:grid-cols-12' : ''
      }`}
    >
      <Link
        to={`/jeep-safari/${safari.slug}`}
        className={`relative overflow-hidden bg-[#0C140F] block shrink-0 ${
          featuredWide ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[4/3] w-full'
        }`}
      >
        <ImageWithFallback
          src={safari.heroImage}
          alt={`${safari.name} off-road 4x4 jeep trail in Coorg`}
          objectPosition={safari.imagePosition}
          fallbackTitle={safari.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C140F]/70 via-transparent to-transparent pointer-events-none" />
      </Link>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featuredWide ? 'lg:col-span-5 lg:justify-between' : ''}`}>
        <div>
          <div className="flex items-center gap-2 text-xs text-[#A6B0A8] mb-2.5 min-w-0">
            <span className="font-medium text-[#E88554] shrink-0">{safari.difficulty}</span>
            <span aria-hidden="true" className="shrink-0">·</span>
            <span className="shrink-0">{safari.category}</span>
            <span aria-hidden="true" className="shrink-0">·</span>
            <span className="truncate">{safari.location}</span>
          </div>

          <h3
            className={`font-display text-2xl sm:text-3xl font-semibold text-[#F2F1EC] leading-snug ${
              featuredWide ? '' : 'line-clamp-2 min-h-[4.6rem]'
            }`}
          >
            <Link
              to={`/jeep-safari/${safari.slug}`}
              className="hover:text-[#E88554] transition-colors"
            >
              {safari.name}
            </Link>
          </h3>

          <p
            className={`mt-3 text-sm text-[#B8C2BA] leading-relaxed ${
              featuredWide ? '' : 'line-clamp-3 min-h-[4.265rem]'
            }`}
          >
            {safari.shortDescription}
          </p>

          {featuredWide && (
            <p className="mt-4 text-xs text-[#8E9B91] leading-relaxed">
              Terrain: {safari.terrain}
            </p>
          )}
        </div>

        <div className="mt-auto pt-5 border-t border-[#F2F1EC]/10 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/jeep-safari/${safari.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#F2F1EC] hover:text-[#E88554] transition-colors whitespace-nowrap"
          >
            View Adventure
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <a
            href={getSafariEnquiryUrl(safari.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#D95D24] hover:bg-[#C04D19] text-white text-xs font-medium transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
