import { ScrollReveal } from '@/components/scroll-reveal';
import Link from 'next/link';

export function BalanceSection() {
  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl text-center mb-10">
          Otthon és vállalkozásban is
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/szamitogep-szerviz-szekesfehervar" className="group block border border-line rounded-lg p-8 hover:border-red transition-colors bg-white">
            <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center text-navy mb-5 group-hover:bg-red group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3 className="font-display font-bold text-navy text-xl mb-3">Otthoni IT</h3>
            <p className="text-ink text-base mb-6">Gép, internet, Wi-Fi, nyomtató, mentés és beállítás.</p>
            <span className="inline-flex items-center text-red font-bold font-display group-hover:underline">
              Tovább az otthoni IT oldalra &rarr;
            </span>
          </Link>
          
          <Link href="/ceges-it-szekesfehervar" className="group block border border-line rounded-lg p-8 hover:border-red transition-colors bg-white">
            <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center text-navy mb-5 group-hover:bg-red group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            </div>
            <h3 className="font-display font-bold text-navy text-xl mb-3">Céges IT</h3>
            <p className="text-ink text-base mb-6">Hálózat, Wi-Fi, Microsoft 365, gépek, szerver és támogatás.</p>
            <span className="inline-flex items-center text-red font-bold font-display group-hover:underline">
              Tovább a céges IT oldalra &rarr;
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
