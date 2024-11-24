"use client";

import Image from "next/image";
import SolvroLogo from "./public/solvro_dark.png";
import PromochatorLogo from "./public/promochator_logo.png";

import { useState } from "react";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center gap-12">
        <div className="flex flex-row gap-2 items-center mr-auto">
          <Image src={PromochatorLogo} alt="Promochator Logo" className="w-6" />
          <p className="text-lg font-semibold">
            Promo<span className="text-[#5f7ecd]">CHAT</span>or
          </p>
        </div>
        <div className="hidden lg:flex flex-row gap-12 whitespace-nowrap">
          <p>Jak to działa?</p>
          <p>Jak ci pomożemy?</p>
          <p>Regulamin</p>
        </div>
        <Image
          src={SolvroLogo}
          alt="Solvro Logo"
          className="hidden lg:flex w-40 ml-auto"
        />
        {/* Mobile icon */}
        <button
          title="Otwórz menu"
          onClick={() => setShowSidebar(true)}
          className="w-6 h-6 flex lg:hidden flex-col gap-2 items-center justify-center"
        >
          <span className="block bg-white w-6 h-0.5" />
          <span className="block bg-white w-6 h-0.5" />
        </button>
      </div>
      {showSidebar && (
        <div className="absolute flex lg:hidden bg-[#040314E5] p-6 top-0 right-0 max-w-sm flex-col gap-12 items-right justify-start w-full h-full">
          <div className="flex flex-row items-center justify-between w-full gap-6 h-min">
            <Image src={SolvroLogo} alt="Solvro Logo" className="w-40" />
            <button
              title="Zamknij menu"
              onClick={() => setShowSidebar(false)}
              className="overflow-hidden aspect-square"
            >
              <div className="rotate-45">
                <span className="absolute block bg-white w-6 h-0.5 rotate-90" />
                <span className="block bg-white w-6 h-0.5" />
              </div>
            </button>
          </div>
          <div className="flex flex-col w-full text-right gap-6 text-xl">
            <p>Jak to działa?</p>
            <p>Jak ci pomożemy?</p>
            <p>Regulamin</p>
          </div>
        </div>
      )}
    </>
  );
}
