import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const strengths = [
  {
    title: "Helhetslösningar",
    body: "En kontaktpunkt för idé, form, produktion och teknisk implementation.",
  },
  {
    title: "Design + produktion + teknik",
    body: "Starkare leveranser när det visuella och det praktiska utvecklas tillsammans.",
  },
  {
    title: "Digital kompetens",
    body: "Webb, appar och specialverktyg som kompletterar den fysiska närvaron.",
  },
  {
    title: "Lokalt engagemang",
    body: "Nära kundrelationer med ett arbetssätt som också möter framtidens krav.",
  },
];

export function Strengths() {
  return (
    <section id="styrkor" className="section-divider py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Styrkor"
            title="Byggt för företag som vill ha kvalitet, tydlighet och rätt nivå av teknik."
            description="Vi prioriterar genomförbarhet, precision och långsiktighet. Resultatet ska fungera i vardagen, hålla över tid och representera varumärket med rätt ton."
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
