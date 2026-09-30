import { Logo } from '@/components/logo';

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-paper border-b border-line">
        <div className="mx-auto max-w-content px-5 h-16 flex items-center">
          <a href="/" aria-label="Vissza a főoldalra">
            <Logo className="h-8" />
          </a>
        </div>
      </header>
      <main className="bg-paper pb-16">
        <article className="mx-auto max-w-content px-5 py-12 sm:py-16">
          <h1 className="font-display font-bold text-navy text-3xl tracking-tight">
            {title}
          </h1>
          <div className="mt-8 prose prose-sm max-w-none text-ink leading-relaxed space-y-4">
            {children}
          </div>
          <div className="mt-12">
            <a href="/" className="text-navy font-medium hover:text-red transition-colors">
              ← Vissza a főoldalra
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
