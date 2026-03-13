import { Container } from "@/components/ui/container";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";

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
          <source src="/hero_loop.mp4" type="video/mp4" />
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

      <div className="relative min-h-[100svh] pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
        <Container className="flex min-h-[calc(100svh-7rem)] flex-col justify-end gap-6 lg:block">
          <Reveal className="lg:absolute lg:left-[max(1.35rem,env(safe-area-inset-left))] lg:top-[22vh] lg:max-w-4xl xl:left-[max(3rem,env(safe-area-inset-left))]">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/58">
                Tre60 Grader
              </p>
              <div className="inline-block rounded-[1.75rem] bg-black/18 px-4 py-4 backdrop-blur-[6px] sm:px-5 sm:py-5">
                <h1 className="max-w-[11ch] font-display text-[2.35rem] leading-[0.94] font-semibold tracking-[-0.065em] text-white min-[430px]:text-[2.7rem] sm:max-w-[12ch] sm:text-[4.15rem] lg:max-w-[11ch] lg:text-[5.9rem]">
                  Design, produktion och digital teknik i en sammanhållen riktning.
                </h1>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:absolute lg:right-[max(1.35rem,env(safe-area-inset-right))] lg:top-[20vh] lg:max-w-sm xl:right-[max(3rem,env(safe-area-inset-right))]">
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

          <Reveal delay={140} className="lg:absolute lg:left-[max(1.35rem,env(safe-area-inset-left))] lg:bottom-12 lg:max-w-md xl:left-[max(3rem,env(safe-area-inset-left))]">
            <div className="rounded-[1.65rem] bg-black/16 p-5 backdrop-blur-[6px]">
              <p className="text-[1rem] leading-7 text-white/74 sm:text-[1.05rem] sm:leading-8">
                Vi skapar genomtänkta lösningar inom dekor och profil, skyddsfilm samt digitala
                verktyg och appar. Praktiskt förankrat. Visuellt tydligt. Tekniskt genomarbetat.
              </p>
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
        </Container>
      </div>
    </section>
  );
}
