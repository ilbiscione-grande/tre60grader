import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const strengths = [
  {
    title: "Tre tydliga fokusområden",
    body: "Dekor och profil, skyddsfilm samt digitala verktyg och appar samlas i ett mer koncentrerat erbjudande.",
  },
  {
    title: "Form och funktion samtidigt",
    body: "Det visuella uttrycket utvecklas parallellt med materialval, montering, användning och teknisk funktion.",
  },
  {
    title: "Praktisk digital kompetens",
    body: "Appar och specialverktyg byggs som ett konkret stöd till verksamheten, inte som fristående teknikprojekt.",
  },
  {
    title: "Lokal närvaro, lång sikt",
    body: "Nära kunddialog kombineras med lösningar som ska hålla i drift, uttryck och relevans över tid.",
  },
];

export function Strengths() {
  return (
    <section id="styrkor" className="section-divider snap-section flex min-h-screen items-center py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Styrkor"
            title="Fokuserat nog för att vara tydligt. Bredd nog för att lösa helheten."
            description="Vi prioriterar genomförbarhet, precision och rätt ambitionsnivå. Resultatet ska fungera i vardagen, hålla över tid och bära varumärket med en lugn och säker ton."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {strengths.map((strength, index) => (
            <Reveal key={strength.title} delay={index * 80}>
              <article className="glass-panel group rounded-[1.75rem] p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {strength.title}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent">
                    360
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{strength.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
