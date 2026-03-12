import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceItems } from "@/lib/content";

export function Services() {
  return (
    <section id="tjanster" className="section-divider py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tjänster"
            title="Kreativ produktion och digital utveckling utan onödiga skarvar."
            description="Vi arbetar brett, men med tydlig struktur. Varje leverans ska vara visuellt stark, tekniskt hållbar och anpassad efter sammanhanget."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
