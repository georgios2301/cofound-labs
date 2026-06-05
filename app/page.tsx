import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Zielgruppe from "@/components/sections/Zielgruppe";
import Services from "@/components/sections/Services";
import Prozess from "@/components/sections/Prozess";
import Referenzen from "@/components/sections/Referenzen";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
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
        <Zielgruppe />
        <Services />
        <Prozess />
        <Referenzen />
        <Team />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
