import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { value: "360°", label: "Helhet från idé till leverans" },
  { value: "5", label: "Kärnområden under samma tak" },
  { value: "Lokal", label: "Närvaro med digital räckvidd" },
];

export function Hero() {
  return (
    <section id="hero" className="section-divider relative pt-10 sm:pt-14">
      <Container>
        <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="hero-grid absolute inset-0 opacity-70" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Tre60 Grader
              </p>
              <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                Design, produktion och digital teknik i en sammanhållen riktning.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Vi skapar genomtänkta lösningar inom skylt, print, skyddsfilm, webb, appar och
                digitala verktyg. Praktiskt förankrat. Visuellt tydligt. Tekniskt genomarbetat.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#kontakt">Boka ett första möte</Button>
                <Button href="#tjanster" variant="secondary">
                  Se våra tjänster
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4">
                <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Fokus
                  </p>
                  <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">
                    Lösningar som fungerar i verkligheten och känns relevanta över tid.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-border bg-white/66 p-5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
                    >
                      <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
