import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { value: "360°", label: "Helhet från idé till leverans" },
  { value: "3", label: "Kärnområden under samma tak" },
  { value: "Lokal", label: "Närvaro med digital räckvidd" },
];

export function Hero() {
  return (
    <section id="hero" className="section-divider relative pt-10 sm:pt-14">
      <Container>
        <div className="glass-panel hero-shell relative overflow-hidden rounded-[2rem] px-5 py-11 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <Parallax offset={18} className="pointer-events-none absolute -right-12 top-16 hidden h-56 w-56 rounded-full bg-accent/10 blur-3xl lg:block" />
          <Parallax offset={30} className="pointer-events-none absolute -left-12 bottom-12 hidden h-56 w-56 rounded-full bg-slate-300/40 blur-3xl lg:block" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <Reveal className="max-w-3xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Tre60 Grader
              </p>
              <h1 className="max-w-[11ch] font-display text-[2.25rem] leading-[0.96] font-semibold tracking-[-0.06em] text-foreground min-[430px]:text-[2.55rem] sm:max-w-[12ch] sm:text-[4.1rem] sm:tracking-[-0.06em] lg:max-w-none lg:text-[5.6rem]">
                Design, produktion och digital teknik i en sammanhållen riktning.
              </h1>
              <p className="mt-5 max-w-[30rem] text-[1rem] leading-7 text-muted sm:mt-6 sm:max-w-[32rem] sm:text-lg sm:leading-8">
                Vi skapar genomtänkta lösningar inom dekor och profil, skyddsfilm samt digitala
                verktyg och appar. Praktiskt förankrat. Visuellt tydligt. Tekniskt genomarbetat.
              </p>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href="#kontakt" className="min-h-[3.25rem] px-6 py-3.5">
                  Boka ett första möte
                </Button>
                <Button href="#tjanster" variant="secondary" className="min-h-[3.25rem] px-6 py-3.5">
                  Se våra tjänster
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4">
                <Parallax offset={14}>
                  <div className="hero-media relative overflow-hidden rounded-[1.8rem] border border-white/65 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/hero-poster.svg"
                    >
                      <source src="/hero-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,26,0.08)_0%,rgba(9,14,26,0.18)_45%,rgba(9,14,26,0.62)_100%)]" />
                    <div className="absolute inset-0 opacity-45 hero-grid mix-blend-screen" />

                    <div className="relative flex min-h-[25rem] flex-col justify-between p-5 sm:min-h-[29rem] sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/84 backdrop-blur-md">
                          Introt kan ersättas med egen video
                        </div>
                        <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs text-white/72 backdrop-blur-md">
                          `/public/hero-loop.mp4`
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="max-w-sm rounded-[1.45rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                            Fokus
                          </p>
                          <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                            Stora visuella ytor med lågmäld rörelse och tydlig struktur.
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                          {metrics.map((item) => (
                            <div
                              key={item.label}
                              className="rounded-[1.4rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1"
                            >
                              <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                                {item.value}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-white/72">{item.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Parallax>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-border bg-white/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Visuell riktning
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Stor bildyta, ren typografi och subtil parallax i stället för många små effekter.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-border bg-white/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Prestanda
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Om ingen video finns används posterbilden direkt, så hero-sektionen fungerar ändå.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
