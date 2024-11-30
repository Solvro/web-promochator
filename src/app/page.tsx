import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "../components/Navbar";
import { DetailsSection } from "@/components/DetailsSection";

export default function Home() {
  return (
    <div className="text-white min-h-screen flex justify-center bg-gradient-to-b from-[#030313] to-[#040A2E]">
      <div className="container p-6">
        <Navbar />
        <HeroSection/>
        <DetailsSection/>
      </div>
    </div>
  );
}
