import { SITE } from '@/lib/site';

export function RemoteHelp() {
  return (
    <section className="bg-orange-wash">
      <div className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight max-w-[20ch]">
          Sok mindent meg tudunk oldani kiszállás nélkül
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
          Ha a gép elindul és van internet, gyakran elég, ha egy kis programon
          keresztül rácsatlakozunk a képernyőjére. Ön végig látja, mit csinálunk,
          és bármikor megszakíthatja. Ez olcsóbb és gyorsabb, mint a kiszállás —
          sokszor percek kérdése.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink max-w-[68ch]">
          Beállítások, e-mail, nyomtató, programtelepítés, vírusgyanú átnézése:
          ezek nagy része megy távolról is. Amihez hozzá kell nyúlni — kábel,
          router, új gép, alkatrész —, ott kimegyünk.
        </p>
        <div className="mt-7">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 border border-navy text-navy font-display font-bold rounded-md text-base hover:bg-navy hover:text-white transition-colors"
          >
            Hívás: {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
