import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import Image from "next/image"
import BackgroundLines from "../../public/background_lines.png";

export default function Home() {
  return <>
    <div className="flex flex-col text-background bg-gradient-to-b  from-[#040314] to-[#040A2E] ">
      <div className="absolute top-0 left-0  flex justify-center w-full bg-gradient-to-b from-[#040314] to-[#030413]">
        <div className="container w-full p-6">
          <Navbar />
        </div>
      </div>
      <HeroSection />
      <Image src={BackgroundLines} alt="Background lines" className="fixed mt-[20rem] w-full" />

    </div>

  </>
}
