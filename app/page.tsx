import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="page-shell flex min-h-screen items-center py-10 sm:py-16">
      <Container>
        <section className="glass-panel relative overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="hero-grid absolute inset-0 opacity-60" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative flex min-h-[70vh] flex-col justify-between gap-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-base font-semibold text-white">
                  360
                </span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-[0.01em] text-foreground">
                    Tre60 Grader
                  </p>
                  <p className="text-sm text-muted">Dekor, skyddsfilm och digitala verktyg</p>
                </div>
              </div>

              <div className="rounded-full border border-border bg-white/72 px-4 py-2 text-sm text-muted">
                Ny webbplats lanseras snart
              </div>
            </div>

            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Kommer snart
              </p>
              <h1 className="max-w-[12ch] font-display text-[2.8rem] leading-[0.96] font-semibold tracking-[-0.065em] text-foreground min-[430px]:text-[3.2rem] sm:text-6xl lg:max-w-[11ch] lg:text-7xl">
                En ny digital närvaro för Tre60 Grader är på väg.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Vi arbetar just nu med en ny webbplats. Under tiden är du varmt välkommen att
                höra av dig om dekor och profil, skyddsfilm eller digitala verktyg och appar.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href="mailto:hej@tre60grader.se" className="min-h-[3.25rem] px-6 py-3.5">
                  hej@tre60grader.se
                </Button>
                <Button
                  href="tel:+46701234567"
                  variant="secondary"
                  className="min-h-[3.25rem] px-6 py-3.5"
                >
                  +46 (0)70 123 45 67
                </Button>
              </div>
            </div>

            <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-border bg-white/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  01
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Dekor och profil för en tydlig fysisk närvaro.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-white/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  02
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Solfilm och skyddsfilm med fokus på funktion och finish.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-white/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  03
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Digitala verktyg och appar som löser konkreta behov.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
