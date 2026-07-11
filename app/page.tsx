import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projekte from "@/components/sections/Projekte";
import Problem from "@/components/sections/Problem";
import Loesung from "@/components/sections/Loesung";
import Ablauf from "@/components/sections/Ablauf";
import Vergleich from "@/components/sections/Vergleich";
import Team from "@/components/sections/Team";
import Garantie from "@/components/sections/Garantie";
import Websites from "@/components/sections/Websites";
import FAQ from "@/components/sections/FAQ";
import Kontakt from "@/components/sections/Kontakt";
import Footer from "@/components/sections/Footer";
import { FAQS } from "@/lib/faqs";

// FAQPage-Schema aus den geteilten FAQ-Inhalten – Chance auf Rich Results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projekte />
        <Problem />
        <Loesung />
        <Ablauf />
        <Vergleich />
        <Team />
        <Garantie />
        <Websites />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
