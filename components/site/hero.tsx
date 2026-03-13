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
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full bg-white/8 blur-3xl lg:block"
      />
      <Parallax
        offset={24}
        className="pointer-events-none absolute left-[-6rem] bottom-[16%] hidden h-72 w-72 rounded-full bg-white/6 blur-3xl lg:block"
      />

      <Container className="relative min-h-[100svh] pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
        <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-end gap-6 lg:block">
          <Reveal className="lg:absolute lg:left-0 lg:top-[22vh] lg:max-w-4xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/58">
                Tre60 Grader
              </p>
              <h1 className="max-w-[11ch] font-display text-[2.35rem] leading-[0.94] font-semibold tracking-[-0.065em] text-white min-[430px]:text-[2.7rem] sm:max-w-[12ch] sm:text-[4.15rem] lg:max-w-[11ch] lg:text-[5.9rem]">
                Design, produktion och digital teknik i en sammanhållen riktning.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:absolute lg:right-0 lg:top-[20vh] lg:max-w-sm">
            <div className="hero-content-panel rounded-[1.65rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">
                Kärnområden
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-white/72">
                <p>Dekor & profil för tydlig fysisk närvaro.</p>
                <p>Skyddsfilm med fokus på funktion och finish.</p>
                <p>Digitala verktyg & appar som löser konkreta behov.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:absolute lg:left-0 lg:bottom-12 lg:max-w-md">
            <div className="hero-content-panel rounded-[1.65rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-[1rem] leading-7 text-white/74 sm:text-[1.05rem] sm:leading-8">
                Vi skapar genomtänkta lösningar inom dekor och profil, skyddsfilm samt digitala
                verktyg och appar. Praktiskt förankrat. Visuellt tydligt. Tekniskt genomarbetat.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180} className="lg:absolute lg:right-0 lg:bottom-12 lg:w-[28rem]">
            <div className="grid gap-4">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="hero-content-panel rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1"
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

          <div className="hidden lg:absolute lg:bottom-12 lg:left-1/2 lg:block lg:-translate-x-1/2">
            <a
              href="#tjanster"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/54 hover:text-white/82"
            >
              Scrolla vidare
              <span className="h-px w-12 bg-white/28" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
