"use client";

import { Equal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import PromochatorLogo from "../../public/assets/logo/promochator-logo.svg";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between",
          showSidebar && "no-scroll",
        )}
      >
        <Image
          src={PromochatorLogo}
          alt="logo Promochatora"
          width={180}
          height={34}
        />
        <div className="hidden flex-row gap-12 whitespace-nowrap lg:flex">
          <Link href="#how-it-works">Jak to działa?</Link>
          <Link href="#details">Jak ci pomożemy?</Link>
        </div>
        <Link href="https://solvro.pwr.edu.pl/" passHref>
          <Image
            src="/assets/logo/solvro_dark.png"
            alt="Solvro Logo"
            width={150}
            height={150}
            className="hidden w-40 lg:flex"
          />
        </Link>
        {/* Mobile icon */}
        {!showSidebar && (
          <Button
            size="icon"
            variant="transparent"
            title="Otwórz menu"
            onClick={() => {
              setShowSidebar(true);
            }}
            className="lg:hidden"
          >
            <Equal size={36} />
          </Button>
        )}
      </div>
      {showSidebar ? (
        <div className="items-right absolute right-0 top-0 flex h-full w-full max-w-sm flex-col justify-start gap-12 bg-[#040314E5] p-6 lg:hidden">
          <div className="flex h-min w-full flex-row items-center justify-between gap-6">
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
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <X size={36} />
            </Button>
          </div>
          <div className="flex w-full flex-col gap-6 text-right text-xl">
            <Link href="#how-it-works">Jak to działa?</Link>
            <Link href="#details">Jak ci pomożemy?</Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
