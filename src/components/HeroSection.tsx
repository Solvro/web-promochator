"use client";

import ChatBot from "../../public/chat-bot.png";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
      <section id="hero" className="flex flex-col items-center justify-center py-24 px-8 z-10">
        <div className="flex flex-col max-w-screen-lg text-center gap-8 lg:gap-12  lg:mt-8">
          <div>
            <h1 className="text-[clamp(2.7rem,5cqw,5rem)] font-bold leading-tight">
              {" "}
              Znajdź swojego{" "}
              <span className="text-color-primary">promotora!</span>
            </h1>
            <p className="text-[clamp(1.2rem,2cqw,1.75rem)] max-w-screen-md mx-auto pt-8">
              {" "}
              Nasz system rekomendacyjny dopasuje go do tytułu lub opisu twojej
              pracy dyplomowej.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-[1.125rem]">
            <Button
              asChild
              variant={"secondary"}
              className="text-[1.125rem] px-6 py-[1.84rem] rounded-xl"
            >
              <Link className="flex justify-center items-center gap-2" href="">
                Wypróbuj <ArrowUpRight size={32} />
              </Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="text-[1.125rem] px-5 py-6 md:px-6 md:py-7 rounded-xl bg-transparent"
            >
              <Link href="">Dowiedz się więcej</Link>
            </Button>
          </div>
          <div className="flex  items-center flex-col justify-center lg:flex-row-reverse lg:items-start lg:gap-5 max-w-screen-lg text-t-secondary text-lg  text-left leading-snug ">
            <div className="bg-chat-user text-t-secondary max-w-xs max-h-[8.25rem] rounded-3xl px-5 py-4 mt-4">
              <p>
                {" "}
                Wpływ modernistycznego stylu w projektowaniu stron
                internetowychna percepcję i doświadczenia użytkownika.
              </p>
            </div>
            <div className="flex lg:flex-row lg:items-start items-center flex-col-reverse justify-center">
              <div className="relative lg:mt-6">
                <div className="relative container bg-chat-bot max-w-xs h-auto rounded-3xl  px-5 py-4 mt-4">
                  <div className="absolute left-1/2 top-[-1.25rem] lg:left-[96%] lg:top-1/3 w-0 h-0 border-l-[1.25rem] border-r-[1.25rem] border-b-[1.25rem] border-transparent border-b-colorChatBot lg:transform lg:rotate-90"></div>
                  <p>
                    Oto{" "}
                    <span className="text-color-primary font-semibold">
                      {" "}
                      promotorzy{" "}
                    </span>
                    , którzy mogą Ci pomóc w realizacji tego tematu:
                  </p>
                  <p className="text-[1.375rem] font-semibold pt-2">
                    Dr hab. Anna Nowak
                  </p>
                  <p>
                    Specjalistka w dziedzinie UX Design i Psychologii Internetu
                  </p>
                  <p className="text-[1.375rem] font-semibold pt-2">
                    {" "}
                    Dr Jan Kowalski
                  </p>
                  <p>Specjalistka w dziedzinie UX Design</p>
                </div>
              </div>
              <Image src={ChatBot} alt="" className="max-w-xs"/>
            </div>
          </div>
        </div>
      </section>
  );
}
