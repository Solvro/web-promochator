import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="text-white h-full min-h-screen flex justify-center w-full bg-gradient-to-b from-[#030313] to-[#040A2E]">
      <div className="container w-full p-6">
        <Navbar />
      </div>
    </div>
  );
}
