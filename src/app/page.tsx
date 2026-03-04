import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Footer from "@/components/Footer";

const IntroSection = dynamic(() => import("@/components/IntroSection"));
const Section4 = dynamic(() => import("@/components/Section4"));
const RentalsSection = dynamic(() => import("@/components/RentalsSection"));
const HoldingsSection = dynamic(() => import("@/components/HoldingsSection"));
const StrategySection = dynamic(() => import("@/components/StrategySection"));
const Section3 = dynamic(() => import("@/components/Section3"));
const Section6 = dynamic(() => import("@/components/Section6"));
const CTASection = dynamic(() => import("@/components/CTASection"));

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
