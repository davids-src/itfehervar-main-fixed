import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Általános szerződési feltételek — IT Fehérvár',
  description: 'Az IT Fehérvár általános szerződési feltételei.',
  robots: { index: true, follow: true },
};

export default function AszfPage() {
  return (
    <LegalPage title="Általános szerződési feltételek">
      <p>
        Ez az oldal jelenleg placeholder tartalmat mutat. A végleges ÁSZF
        szöveg hamarosan kerül feltöltésre.
      </p>
    </LegalPage>
  );
}
