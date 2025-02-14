import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { AnimatedGradientText } from "./magicui/animated-gradient-text";

export function DyzuryAppAd() {
  return (
    <Link
      href="https://xn--dyury-jib.app/dl?utm_source=solvro&utm_medium=banner&utm_campaign=promochator"
      target="_blank"
    >
      <AnimatedGradientText className="mt-32 flex gap-x-2 rounded-md bg-[#234ce0] bg-opacity-30">
        <Image
          src="/dyzury-app/logo.png"
          width={32}
          height={32}
          alt="Logo DyżuryApp"
          className="rounded-md"
        ></Image>
        <hr className="mx-2 h-4 w-px shrink-0 bg-gray-500" />
        <span
          className={cn(
            `animate-gradient text-balance bg-gradient-to-r from-[#5f88ee] via-[#E95BD2] to-[#A247E3] bg-[length:var(--bg-size)_100%] bg-clip-text text-center text-transparent`,
          )}
        >
          Koniec kłótni, o to kto sprząta! <br />
          Wypróbuj Dyżury.app!
        </span>
      </AnimatedGradientText>
    </Link>
  );
}
