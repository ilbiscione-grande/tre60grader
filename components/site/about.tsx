import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  "Dekor och profil utvecklas med respekt för material, ytor och hur lösningen faktiskt ska användas.",
  "Skyddsfilm planeras med fokus på funktion, hållbarhet och ett rent visuellt resultat.",
  "Digitala verktyg och appar byggs för tydliga flöden, konkret nytta och långsiktig användning.",
  "Varje uppdrag formas efter behovet, inte efter färdiga paket eller onödigt komplexa upplägg.",
];

export function About() {
  return (
    <section
      id="om"
      className="section-divider snap-section flex min-h-screen items-center py-24 sm:py-28"
      data-snap-section
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Arbetssätt"
              title="Tre områden. Ett sammanhållet arbetssätt med samma krav på precision."
              description="Tre60 Grader arbetar i skärningen mellan fysisk miljö och digital funktion. Det gör att dekor, skyddsfilm och digitala lösningar kan utvecklas med bättre kontroll, tydligare prioriteringar och en mer sammanhållen helhet."
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
