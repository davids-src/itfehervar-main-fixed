import { ScrollReveal } from '@/components/scroll-reveal';

export function ProfessionalBacking() {
  return (
    <section className="bg-mist border-t border-line">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-4">
              Szakmai háttér
            </h2>
            <p className="text-ink text-lg leading-relaxed">
              Az IT Fehérvár helyi, gyors megkeresésekre épülő márka. Komplex informatikai és üzemeltetési feladatoknál a SIROTECH/SIRONIC szakmai háttere áll mögötte.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            {/* Finom hálózati diagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="120" viewBox="0 0 160 120" className="text-navy opacity-80">
              <circle cx="80" cy="60" r="8" className="fill-red" />
              <circle cx="30" cy="30" r="6" fill="currentColor" />
              <circle cx="130" cy="30" r="6" fill="currentColor" />
              <circle cx="30" cy="90" r="6" fill="currentColor" />
              <circle cx="130" cy="90" r="6" fill="currentColor" />
              
              <line x1="80" y1="60" x2="30" y2="30" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="80" y1="60" x2="130" y2="30" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="80" y1="60" x2="30" y2="90" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="80" y1="60" x2="130" y2="90" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="30" y1="30" x2="130" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4" />
              <line x1="30" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4" />
            </svg>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
