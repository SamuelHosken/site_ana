import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Section1 from "@/components/Section1";
import Section4 from "@/components/Section4";
import RentalsSection from "@/components/RentalsSection";
import HoldingsSection from "@/components/HoldingsSection";
import StrategySection from "@/components/StrategySection";
import Section3 from "@/components/Section3";
import Section6 from "@/components/Section6";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <Section1 />
      <Section4 />
      <RentalsSection />
      <HoldingsSection />
      <StrategySection />
      <Section3 />
      <Section6 />
      <CTASection />
      <Footer />
    </main>
  );
}
