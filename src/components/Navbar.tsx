"use client";

import Image from "next/image";



import { useState } from "react";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center gap-12">
        <div className="flex flex-row gap-2 items-center mr-auto">
          <Image
            src="/assets/logo/promochator_logo.png"
            alt="Promochator Logo"
            className="w-6"
            width={150}
            height={150}
          />
          <p className="text-lg font-semibold">
            Promo<span className="text-[#5f7ecd]">CHAT</span>or
          </p>
        </div>
        <div className="hidden lg:flex flex-row gap-12 whitespace-nowrap">
          <Link href="#how-it-works">Jak to działa?</Link>
          <Link href="#details">Jak ci pomożemy?</Link>
          <Link href="/terms-of-use">Regulamin</Link>
        </div>
        <Link href="https://solvro.pwr.edu.pl/" className="ml-auto" passHref>
          <Image
            src="/assets/logo/solvro_dark.png"
            alt="Solvro Logo"
            width={150}
            height={150}
            className="hidden lg:flex w-40"
          />
        </Link>
        {/* Mobile icon */}
        {!showSidebar && (
          <Button
            size="icon"
            variant="transparent"
            title="Otwórz menu"
            onClick={() => setShowSidebar(true)}
            className="lg:hidden"
          >
            <Equal size={36} />
          </Button>
        )}
      </div>
      {showSidebar && (
        <div className="absolute flex lg:hidden bg-[#040314E5] p-6 top-0 right-0 max-w-sm flex-col gap-12 items-right justify-start w-full h-full">
          <div className="flex flex-row items-center justify-between w-full gap-6 h-min">
            <Link href="https://solvro.pwr.edu.pl/" passHref>
              <Image
                src="/assets/logo/solvro_dark.png"
                alt="Solvro Logo"
                className="w-40"
                width={150}
                height={150}
              />
            </Link>
            <Button
              size="icon"
              variant="transparent"
              title="Zamknij menu"
              onClick={() => setShowSidebar(false)}
            >
              <X size={36} />
            </Button>
          </div>
          <div className="flex flex-col w-full text-right gap-6 text-xl">
            <Link href="#how-it-works">Jak to działa?</Link>
            <Link href="#details">Jak ci pomożemy?</Link>
            <Link href="/terms-of-use">Regulamin</Link>
          </div>
        </div>
      )}
    </>
  );
}
