import { MessageCircle } from 'lucide-react';
import { Experience } from '../../models/experience.model';
import { getExperienceEnquiryUrl } from '../../services/whatsapp.service';
import { ImageWithFallback } from './ImageWithFallback';

interface ExperienceCardProps {
  experience: Experience;
  detailed?: boolean;
}

export function ExperienceCard({ experience, detailed = false }: ExperienceCardProps) {
  return (
    <article className="group flex h-full w-full flex-col bg-white border border-[#161B17]/10 rounded-sm overflow-hidden transition-colors hover:border-[#161B17]/25">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#121C16]">
        <ImageWithFallback
          src={experience.image}
          alt={experience.title}
          objectPosition={experience.imagePosition}
          fallbackTitle={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs text-[#525B53] mb-2 min-w-0">
          <span className="font-medium text-[#D95D24] shrink-0">{experience.category}</span>
          <span aria-hidden="true" className="shrink-0">·</span>
          <span className="truncate">{experience.bestSeason}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-[#161B17] leading-snug line-clamp-2 min-h-[4.125rem]">
          {experience.title}
        </h3>

        <p
          className={`mt-2.5 text-sm text-[#4E5850] leading-relaxed ${
            detailed ? 'line-clamp-4 min-h-[5.7rem]' : 'line-clamp-3 min-h-[4.265rem]'
          }`}
        >
          {detailed ? experience.description : experience.shortDescription}
        </p>

        {detailed && (
          <ul className="mt-4 space-y-1.5 text-xs text-[#4E5850] border-t border-[#161B17]/8 pt-3.5 min-h-[4.5rem]">
            {experience.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="truncate">
                · {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 border-t border-[#161B17]/8 flex items-center justify-between gap-3">
          <span className="font-mono-tabular text-xs text-[#525B53] truncate">
            {experience.durationGuide}
          </span>
          <a
            href={getExperienceEnquiryUrl(experience.enquiryLabel)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1F4D36] hover:text-[#D95D24] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
