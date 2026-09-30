import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Problems } from '@/components/sections/problems';
import { Segments } from '@/components/sections/segments';
import { Process } from '@/components/sections/process';
import { Pricing } from '@/components/sections/pricing';
import { Local } from '@/components/sections/local';
import { ProfessionalBacking } from '@/components/sections/professional-backing';
import { FinalCta } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { JsonLd } from '@/components/json-ld';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <Problems />
        <Segments />
        <Process />
        <Pricing />
        <Local />
        <ProfessionalBacking />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
