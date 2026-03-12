import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <Container className="flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Tre60 Grader</p>
        <p>Skylt, print, skyddsfilm, webb och digitala lösningar</p>
      </Container>
    </footer>
  );
}
