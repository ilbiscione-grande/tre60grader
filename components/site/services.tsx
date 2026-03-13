import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceItems } from "@/lib/content";

const metrics = [
  { value: "360°", label: "Helhet från idé till leverans" },
  { value: "3", label: "Kärnområden under samma tak" },
  { value: "Lokal", label: "Närvaro med digital räckvidd" },
];

export function Services() {
  return (
    <section
      id="tjanster"
      className="section-divider snap-section flex min-h-screen items-center py-24 sm:py-28"
      data-snap-section
    >
      <Container>
        <Reveal>
          <div className="mb-12 grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div className="rounded-[1.75rem] border border-border bg-white/66 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Vidare från introt
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                Här börjar informationsdelen med kort, struktur och nästa steg. Hero-sektionen
                ovanför är avsiktligt renare och mer filmisk.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href="#kontakt" className="min-h-[3.25rem] px-6 py-3.5">
                  Boka ett första möte
                </Button>
                <Button href="#process" variant="secondary" className="min-h-[3.25rem] px-6 py-3.5">
                  Se processen
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.45rem] border border-border bg-white/66 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-md"
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

        <Reveal>
          <SectionHeading
            eyebrow="Tjänster"
            title="Tre kärnområden med tydlig koppling mellan form, funktion och genomförande."
            description="Vi fokuserar på tre områden där fysisk produktion och digital kompetens möts naturligt. Varje leverans ska vara visuellt stark, tekniskt hållbar och relevant i praktiken."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {serviceItems.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="group glass-panel h-full rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-accent/0 via-accent/35 to-accent/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <p className="mt-5 text-sm font-medium text-foreground/84 transition-transform duration-200 group-hover:translate-x-1">
                  {service.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
