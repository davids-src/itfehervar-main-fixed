import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { BalanceSection } from '@/components/sections/balance-section';
import { TrustStrip } from '@/components/sections/trust-strip';
import { ProjectStrip } from '@/components/sections/project-strip';
import { Problems } from '@/components/sections/problems';
import { WhoWeServe } from '@/components/sections/who-we-serve';
import { ProfessionalBacking } from '@/components/sections/professional-backing';
import { Process } from '@/components/sections/process';
import { Pricing } from '@/components/sections/pricing';
import { Portrait } from '@/components/sections/portrait';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { JsonLd } from '@/components/json-ld';
import { Battlement } from '@/components/battlement';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        
        <BalanceSection />
        
        <Battlement className="bg-mist text-paper" color="#f1f5f9" />
        <TrustStrip />
        
        <Battlement className="bg-navy text-mist" color="#1C3461" />
        <ProjectStrip />
        
        <Battlement className="bg-paper text-navy" color="#FFFFFF" />
        <Problems />
        
        <ProfessionalBacking />
        
        <Battlement className="bg-paper text-navy" />
        <WhoWeServe />
        
        <Battlement className="bg-paper text-navy" />
        <Process />
        
        <Battlement className="bg-navy-deep text-white" color="#FFFFFF" />
        <Pricing />
        
        <Battlement className="bg-paper text-navy" />
        <Portrait />
        
        <Battlement className="bg-paper text-navy" />
        <FAQ />
        
        <Battlement className="bg-mist text-navy" />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
