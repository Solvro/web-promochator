"use client";

import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromochatorLogo from "../../public/assets/logo/promochator-logo.svg";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <Image
          src={PromochatorLogo}
          alt="logo Promochatora"
          width={160}
          height={34}
        />
        <div className="hidden lg:flex flex-row gap-12 whitespace-nowrap">
          <Link href="#how-it-works">Jak to działa?</Link>
          <Link href="#details">Jak ci pomożemy?</Link>
          <Link href="/terms-of-use">Regulamin</Link>
        </div>
        <Link href="https://solvro.pwr.edu.pl/" passHref>
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
                width={160}
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
