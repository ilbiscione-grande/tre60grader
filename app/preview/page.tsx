import type { Metadata } from "next";
import { FullHome } from "@/components/site/full-home";

export const metadata: Metadata = {
  title: "Tre60 Grader Preview",
  description: "Förhandsvisning av den kommande webbplatsen för Tre60 Grader.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewPage() {
  return <FullHome />;
}
