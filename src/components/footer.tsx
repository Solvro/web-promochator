import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import PromochatorLogo from "../../public/assets/logo/promochator-logo.svg";
import { Github, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full bg-black p-8 pb-2 mt-8">
      <div className=" flex flex-col gap-6 max-w-screen-xl mx-auto">
        <h3 className="pb-3 pt-4 text-4xl font-bold">Najlepszy wybór!</h3>
        <div className="flex flex-col md:flex-row md:w-1/2 gap-12">
          <div className="md:w-2/3 mt-2">
            <p>Promochator jest stroną, która pomoże ci w znalezieniu idealnego promotora dopasowanego do twoich potrzeb!</p>
          </div>
          <div className="w-1/3">
            <Button className="p-0 text-white" variant="link"><Link className="flex items-center justify-center gap-2" href="/chat"> Wypróbuj chat!</Link></Button>
            <Button className="p-0 text-white" variant="link"><Link href="#how-it-works">Jak to działa?</Link></Button>
            <Button className="p-0 text-white" variant="link"><Link href="#details">Jak ci pomożemy?</Link></Button>
          </div>
        </div>
        <div className="flex gap-5">
          <Link href="https://github.com/Solvro/web-promochator">
            <Github />
          </Link>
          <Link href="https://www.facebook.com/knsolvro/?locale=pl_PL">
            <Facebook />
          </Link>
          <Link href="https://pl.linkedin.com/company/knsolvro">
            <Linkedin />
          </Link>
          <Link href="https://www.instagram.com/knsolvro/">
            <Instagram />
          </Link>
        </div>
        <div className="flex mt-8 gap-8">
          <Image
            src={PromochatorLogo}
            alt="logo Promochatora"
            width={180}
            height={34}
            className="w-44 md:flex"
          />
          <Link href="https://solvro.pwr.edu.pl/" passHref>
            <Image
              src="/assets/logo/solvro_dark.png"
              alt="Solvro Logo"
              width={150}
              height={150}
              className="w-40 md:flex"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-sm">Copyright ©2024 PromoCHATor</p>
        </div>
      </div>
    </div>

  );
}
