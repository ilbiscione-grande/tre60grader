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
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-white">
              360
            </span>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.02em] text-foreground">
                Tre60 Grader
              </p>
              <p className="text-xs text-muted">Dekor, skyddsfilm och digitala verktyg</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <Button href="#kontakt" variant="secondary" className="hidden sm:inline-flex">
            Starta ett projekt
          </Button>
        </div>
      </Container>
    </header>
  );
}
