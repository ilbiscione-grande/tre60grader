import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om", href: "#om" },
  { label: "Process", href: "#process" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="pt-6 sm:pt-7">
        <div className="flex items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/8 text-sm font-semibold text-white backdrop-blur-md">
              360
            </span>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.02em] text-white">
                Tre60 Grader
              </p>
              <p className="text-xs text-white/60">Dekor, skyddsfilm och digitala verktyg</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            href="#kontakt"
            variant="secondary"
            className="hidden border-white/14 bg-white/8 text-white hover:border-white/24 hover:bg-white/12 hover:text-white sm:inline-flex"
          >
            Starta ett projekt
          </Button>
        </div>
      </Container>
    </header>
  );
}
