import Link from 'next/link';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { Contact } from '@/components/sections/contact';
import { MobileCallBar } from '@/components/mobile-call-bar';
import { SITE } from '@/lib/site';

type Item = { title: string; text: string };

export function ServicePage({
  title,
  intro,
  items,
  breadcrumbLabel,
  canonicalPath,
}: {
  title: string;
  intro: string;
  items: Item[];
  breadcrumbLabel: string;
  canonicalPath: string;
}) {
  const canonical = `${SITE.url}${canonicalPath}`;

  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="mx-auto max-w-content px-5 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-red">
                  Kezdőlap
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-navy font-medium">
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>

          <h1 className="font-display font-bold text-navy text-3xl sm:text-4xl tracking-tight max-w-[28ch]">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">{intro}</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item.title} className="border border-line rounded-lg p-5 bg-paper">
                <h2 className="font-bold text-navy text-base">{item.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-ink">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-red text-white font-bold rounded-md text-base hover:bg-red-hover transition-colors"
            >
              Hívás most
            </a>
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
            >
              Hibabejelentés
            </Link>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
      <MobileCallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Kezdőlap', item: SITE.url },
              { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: canonical },
            ],
          }),
        }}
      />
    </>
  );
}
