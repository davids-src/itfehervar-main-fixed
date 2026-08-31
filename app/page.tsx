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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Problems />
        <WhoWeServe />
        <RemoteHelp />
        <Process />
        <Pricing />
        <Portrait />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
