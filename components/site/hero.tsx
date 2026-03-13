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
    <section id="hero" className="section-divider relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
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
        <div className="hero-video-overlay absolute inset-0" />
        <div className="absolute inset-0 opacity-30 hero-grid mix-blend-screen" />
      </div>

      <Parallax
        offset={16}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full bg-cyan-300/16 blur-3xl lg:block"
      />
      <Parallax
        offset={24}
        className="pointer-events-none absolute left-[-6rem] bottom-[16%] hidden h-72 w-72 rounded-full bg-accent/14 blur-3xl lg:block"
      />

      <Container className="relative flex min-h-[100svh] items-end pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
        <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-10">
          <Reveal className="max-w-4xl">
            <div className="hero-content-panel rounded-[2rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md sm:p-7 lg:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Tre60 Grader
              </p>
              <h1 className="max-w-[11ch] font-display text-[2.35rem] leading-[0.95] font-semibold tracking-[-0.065em] text-white min-[430px]:text-[2.7rem] sm:max-w-[12ch] sm:text-[4.25rem] lg:max-w-[11ch] lg:text-[5.9rem]">
                Design, produktion och digital teknik i en sammanhållen riktning.
              </h1>
              <p className="mt-5 max-w-[34rem] text-[1rem] leading-7 text-white/74 sm:mt-6 sm:text-[1.05rem] sm:leading-8">
                Vi skapar genomtänkta lösningar inom dekor och profil, skyddsfilm samt digitala
                verktyg och appar. Praktiskt förankrat. Visuellt tydligt. Tekniskt genomarbetat.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href="#kontakt" className="min-h-[3.25rem] px-6 py-3.5">
                  Boka ett första möte
                </Button>
                <Button
                  href="#tjanster"
                  variant="secondary"
                  className="min-h-[3.25rem] border-white/16 bg-white/10 px-6 py-3.5 text-white hover:border-white/28 hover:bg-white/14 hover:text-white"
                >
                  Se våra tjänster
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4">
              <div className="hero-content-panel rounded-[1.8rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Intro
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  Helskärmsvideo i toppen med lågmäld rörelse och stark typografisk kontrast.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Lägg din egen film som <span className="font-medium text-white/82">`/public/hero-loop.mp4`</span>.
                  Om filen saknas visas posterbilden automatiskt.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="hero-content-panel rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1"
                  >
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
