import { ScrollReveal } from '@/components/scroll-reveal';

const PORTRAIT_PHOTO = process.env.PORTRE_FOTO || '';

export function Portrait() {
  if (!PORTRAIT_PHOTO) return null;

  return (
    <section className="bg-paper">
      <ScrollReveal className="mx-auto max-w-content px-5 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img
            src={PORTRAIT_PHOTO}
            alt="A szervizelő, aki kimegy Önhöz"
            className="w-full sm:w-64 h-auto rounded-lg object-cover shrink-0"
            width={256}
            height={256}
          />
          <div className="flex-1">
            <h2 className="font-display font-extrabold text-navy text-2xl sm:text-2xl tracking-tight">
              Ki jön ki Önhöz
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink max-w-[68ch]">
              Fehérvári vagyok, és évek óta ezzel foglalkozom. Gyártó cégek és
              irodák gépeit is én tartom karban, de a hívások többsége egyszerű
              dologról szól: valami leállt, és nincs kit hívni. Nem szeretem, ha
              valaki azért fizet, mert nem érti, mi történt a gépével. Ezért
              mindig elmondom, mi volt a baj, és hogy mit tud legközelebb egyedül
              megoldani.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
