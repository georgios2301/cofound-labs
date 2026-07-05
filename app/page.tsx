import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ablauf from "@/components/sections/Ablauf";
import Preis from "@/components/sections/Preis";
import Referenzen from "@/components/sections/Referenzen";
import Software from "@/components/sections/Software";
import Team from "@/components/sections/Team";
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
        <Ablauf />
        <Preis />
        <Referenzen />
        <Software />
        <Team />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
