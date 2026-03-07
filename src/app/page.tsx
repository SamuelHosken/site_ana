import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import Footer from "@/components/Footer";

const IntroSection = dynamic(() => import("@/components/IntroSection"));
const AdvertisingSection = dynamic(() => import("@/components/AdvertisingSection"));
const RentalsSection = dynamic(() => import("@/components/RentalsSection"));
const HoldingsSection = dynamic(() => import("@/components/HoldingsSection"));
const StrategySection = dynamic(() => import("@/components/StrategySection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const InternationalPreviewSection = dynamic(() => import("@/components/InternationalPreviewSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <ApproachSection />
      <AdvertisingSection />
      <RentalsSection />
      <HoldingsSection />
      <StrategySection />
      <ServicesSection />
      <InternationalPreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
}
