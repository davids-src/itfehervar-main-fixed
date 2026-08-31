import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { Problems } from '@/components/sections/problems';
import { WhoWeServe } from '@/components/sections/who-we-serve';
import { RemoteHelp } from '@/components/sections/remote-help';
import { Process } from '@/components/sections/process';
import { Pricing } from '@/components/sections/pricing';
import { Portrait } from '@/components/sections/portrait';
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
        
        <Battlement className="bg-mist text-navy" />
        <TrustStrip />
        
        <Battlement className="bg-paper text-navy" />
        <Problems />
        
        <Battlement className="bg-paper text-navy" />
        <WhoWeServe />
        
        <Battlement className="bg-navy-deep text-white" color="#FFFFFF" />
        <RemoteHelp />
        
        <Battlement className="bg-paper text-navy" />
        <Process />
        
        <Battlement className="bg-navy-deep text-white" color="#FFFFFF" />
        <Pricing />
        
        <Battlement className="bg-paper text-navy" />
        <Portrait />
        
        <Battlement className="bg-mist text-navy" />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
