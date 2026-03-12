import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const contactItems = [
  { label: "E-post", value: "hej@tre60grader.se", href: "mailto:hej@tre60grader.se" },
  { label: "Telefon", value: "+46 (0)70 123 45 67", href: "tel:+46701234567" },
  { label: "Ort", value: "Sverige", href: "#kontakt" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

export function Contact() {
  return (
    <section id="kontakt" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Kontakt
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  Behöver du hjälp med dekor och profil, skyddsfilm eller ett digitalt verktyg?
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  Vi hjälper företag som vill samla form, funktion och genomförande i en tydlig
                  process. Beskriv uppdraget kort, så tar vi nästa steg tillsammans.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:hej@tre60grader.se">Kontakta oss</Button>
                  <Button href="#hero" variant="secondary">
                    Tillbaka till toppen
                  </Button>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[1.75rem] border border-border bg-white/66 p-6">
                  <p className="text-sm font-medium text-muted">Kontaktuppgifter</p>
                  <div className="mt-5 grid gap-4">
                    {contactItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-start gap-2 rounded-2xl border border-border px-4 py-4 text-sm hover:border-accent/30 hover:bg-accent-soft/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                      >
                        <span className="text-muted">{item.label}</span>
                        <span className="break-all text-left font-medium text-foreground sm:text-right">
                          {item.value}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-border bg-white/66 p-6">
                  <p className="text-sm font-medium text-muted">Skicka en kort förfrågan</p>
                  <form className="mt-5 grid gap-4">
                    <label htmlFor="name" className="sr-only">
                      Namn eller företag
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Namn eller företag"
                      className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/40"
                    />
                    <label htmlFor="email" className="sr-only">
                      E-post
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="E-post"
                      className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/40"
                    />
                    <label htmlFor="message" className="sr-only">
                      Kort beskrivning av projektet
                    </label>
                    <textarea
                      id="message"
                      placeholder="Exempel: dekor till butik, skyddsfilm till kontor eller ett internt digitalt verktyg"
                      rows={4}
                      className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/40"
                    />
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white hover:bg-[#0b1323]"
                    >
                      Skicka förfrågan
                    </button>
                  </form>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="rounded-full border border-border bg-white/66 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
