import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  "Praktiskt hantverk med respekt för material, miljö och slutresultat.",
  "Modern designmetodik som skapar tydlighet i både uttryck och funktion.",
  "Teknisk problemlösning där webb, appar och automation får en konkret roll.",
  "Skräddarsydda upplägg som utgår från behov, inte standardpaket.",
];

export function About() {
  return (
    <section id="om" className="section-divider py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Arbetssätt"
              title="Ett lugnt, exakt och lösningsorienterat sätt att bygga värde."
              description="Tre60 Grader förenar fysisk produktion med digital kompetens. Det gör att idéer kan omsättas snabbare, med bättre kontroll och en tydligare helhet."
            />
          </Reveal>

          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 100}>
                <div className="glass-panel rounded-[1.5rem] px-6 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <p className="text-base leading-7 text-foreground/86">{principle}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
