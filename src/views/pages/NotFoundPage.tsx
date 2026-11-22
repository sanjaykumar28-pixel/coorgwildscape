import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-[#0C140F] text-[#F2F1EC] px-5 pt-28 pb-20">
      <div className="max-w-xl text-center">
        <p className="font-mono-tabular text-xs uppercase tracking-[0.2em] text-[#E88554] mb-3">
          404 · Trail Not Found
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Looks Like You Went Off The Trail.
        </h1>
        <p className="mt-4 text-base text-[#B8C2BA] leading-relaxed">
          The page you are looking for does not exist or has moved. Return to our Kodagu
          home base or explore our jeep safaris and destinations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#F2F1EC] text-[#0C140F] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to="/places"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#D95D24] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C04D19] transition-colors"
          >
            <Compass className="w-4 h-4" aria-hidden="true" />
            Explore Coorg
          </Link>
        </div>
      </div>
    </section>
  );
}
