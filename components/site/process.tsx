import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Idé",
    body: "Behov, mål och förutsättningar definieras tidigt för att skapa rätt riktning.",
  },
  {
    title: "Design",
    body: "Koncept, uttryck och struktur formas med fokus på tydlighet och användning.",
  },
  {
    title: "Produktion",
    body: "Material, teknik och detaljer samordnas för ett stabilt och välgjort resultat.",
  },
  {
    title: "Leverans",
    body: "Implementering, uppföljning och nästa steg planeras utan onödig friktion.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-divider snap-section flex min-h-screen items-center py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="En tydlig process som ger bättre tempo och färre frågetecken."
            description="Vi arbetar strukturerat men flexibelt. Det skapar lugn i projektet och gör det enklare att hålla hög nivå genom hela leveransen."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <article className="relative h-full rounded-[1.75rem] border border-border bg-white/55 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.body}</p>
                {index < steps.length - 1 ? (
                  <div className="absolute right-0 top-1/2 hidden h-px w-5 translate-x-full bg-gradient-to-r from-accent/40 to-transparent lg:block" />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
