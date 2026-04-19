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

export default function Home() {
  return (
    <>
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
