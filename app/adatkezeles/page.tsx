import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Adatkezelési tájékoztató — IT Fehérvár',
  description: 'Az IT Fehérvár adatkezelési tájékoztatója.',
  robots: { index: true, follow: true },
};

export default function AdatkezelesPage() {
  return (
    <LegalPage title="Adatkezelési tájékoztató">
      <p>
        Ez az oldal jelenleg placeholder tartalmat mutat. A végleges
        adatkezelési tájékoztató szöveg hamarosan kerül feltöltésre.
      </p>
    </LegalPage>
  );
}
