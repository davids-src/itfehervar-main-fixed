import { CallbackForm } from '@/components/callback-form';
import { SITE } from '@/lib/site';

export function Contact({
  heading = 'Írja le, mi a probléma.',
  showIntro = true,
}: {
  heading?: string;
  showIntro?: boolean;
}) {
  return (
    <section id="kapcsolat" className="bg-mist">
      <div className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-bold text-navy text-2xl tracking-tight">
          {heading}
        </h2>
        {showIntro && (
          <p className="mt-4 text-lg leading-relaxed text-ink max-w-[68ch]">
            Írja le röviden a hibát, adja meg a helyszínt és egy telefonszámot. Sürgős esetben:{' '}
            <a href={SITE.phoneHref} className="font-semibold text-red hover:underline">
              {SITE.phone}
            </a>
          </p>
        )}
        <div className="mt-8 max-w-xl">
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
