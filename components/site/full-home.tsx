import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Strengths } from "@/components/site/strengths";

export function FullHome() {
  return (
    <main className="page-shell min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Strengths />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
