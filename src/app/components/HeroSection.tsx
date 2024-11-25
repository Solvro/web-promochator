"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ChatBot from "../../../public/chat-bot.png";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
    const animateContainer = useRef<HTMLDivElement[]>([]);

    const animateContainerRef = useCallback((el: HTMLDivElement | null) => {
        if (el) {
            animateContainer.current = [...animateContainer.current, el];
        }
    }, []);

    useEffect(() => {
        let containerDelay = 0;
        animateContainer.current.forEach((container) => {
            gsap.from(container, {
                opacity: 0,
                y: -50,
                duration: 1,
                delay: containerDelay,
                ease: "expo.out",
            });
            containerDelay += 0.4;
        });
    }, []);

    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-screen lg:h-screen py-24 px-8 z-10">
                <div className="flex flex-col max-w-screen-lg text-center gap-8 lg:gap-12  lg:mt-8" >
                    <div ref={animateContainerRef}>
                        <h1 className="text-[clamp(2.7rem,5cqw,5rem)] font-bold leading-tight" > Znajdź swojego{" "} <span className="text-[var(--color-primary)]">promotora!</span></h1>
                        <p className="text-[clamp(1.2rem,2cqw,1.75rem)] max-w-screen-md mx-auto pt-8" >  Nasz system rekomendacyjny dopasuje go do tytułu lub opisu twojej pracy dyplomowej. </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-[1.125rem]" ref={animateContainerRef}>
                        <button className="px-5 py-4  bg-[var(--color-white)] text-[#010840] rounded-xl">
                            <a className="flex justify-center items-center gap-2" href="">Wypróbuj <ArrowUpRight size={32} color="#010840" /></a>
                        </button>
                        <button className="px-4 py-3 border border-white rounded-xl">
                            <a href="">Dowiedz się więcej</a>
                        </button>
                    </div>
                    <div className="flex  items-center flex-col justify-center lg:flex-row-reverse lg:items-start lg:gap-5 max-w-screen-lg text-lg text-left leading-snug" >
                        <div className="bg-[#34386A] max-w-xs max-h-[8.25rem] rounded-3xl px-5 py-4 mt-4" ref={animateContainerRef} >
                            <p> Wpływ modernistycznego stylu w projektowaniu stron internetowychna percepcję i doświadczenia użytkownika.</p>
                        </div>
                        <div className="flex lg:flex-row lg:items-start items-center flex-col-reverse justify-center" ref={animateContainerRef}>
                            <div className="relative lg:mt-6 " >
                                <div className="relative container bg-[#1D2150] max-w-xs h-auto rounded-3xl  px-5 py-4 mt-4">
                                    <div className="absolute left-1/2 top-[-1.25rem] lg:left-[96%] lg:top-1/3 w-0 h-0 border-l-[1.25rem] border-r-[1.25rem] border-b-[1.25rem] border-transparent border-b-[#1D2150] lg:transform lg:rotate-90"></div>
                                    <p>Oto{" "} <span className="text-[var(--color-primary)] font-semibold"> promotorzy  </span>, którzy mogą Ci pomóc w realizacji tego tematu:</p>
                                    <h3 className="text-[1.375rem] font-semibold pt-2">Dr hab. Anna Nowak</h3>
                                    <p>Specjalistka w dziedzinie UX Design i Psychologii Internetu</p>
                                    <h3 className="text-[1.375rem] font-semibold pt-2"> Dr Jan Kowalski</h3>
                                    <p>Specjalistka w dziedzinie UX Design</p>
                                </div>
                            </div>
                            <Image src={ChatBot} alt="ChatBot-image" className="max-w-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
