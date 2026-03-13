import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { PreviewScrollController } from "@/components/site/preview-scroll-controller";
import { Services } from "@/components/site/services";
import { Strengths } from "@/components/site/strengths";

export function FullHome() {
  return (
    <main
      className="page-shell preview-shell h-screen overflow-y-auto overflow-x-hidden"
      data-preview-shell
    >
      <PreviewScrollController />
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
