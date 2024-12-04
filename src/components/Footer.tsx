
import Image from "next/image";
import Link from "next/link";
import { Github, Facebook, Linkedin, Instagram } from 'lucide-react';

import PromochatorLogo from "../../public/assets/logo/promochator-logo.svg";

export function Footer() {
    return (
        <div className="flex justify-center md:justify-between items-center mt-24">
            <Image
                src={PromochatorLogo}
                alt="logo Promochatora"
                width={180}
                height={34}
                className="hidden md:flex w-44"
            />
            <div className="flex gap-10">
                <Link href="https://github.com/Solvro/web-promochator"><Github /></Link>
                <Link href="https://www.facebook.com/knsolvro/?locale=pl_PL"><Facebook /></Link>
                <Link href="https://pl.linkedin.com/company/knsolvro"><Linkedin /></Link>
                <Link href="https://www.instagram.com/knsolvro/"><Instagram /></Link>
            </div>
            <Link href="https://solvro.pwr.edu.pl/" passHref>
                <Image
                    src="/assets/logo/solvro_dark.png"
                    alt="Solvro Logo"
                    width={150}
                    height={150}
                    className="hidden md:flex w-40"
                />
            </Link>
        </div>
    );
}