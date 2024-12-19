import { DetailsSection } from "@/components/details-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";

import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#030313] to-[#040A2E] text-white">
      <div className="container p-6">
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        <DetailsSection />
      </div>
      <Footer />
    </div>
  );
}
