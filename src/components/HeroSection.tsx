import ChatBot from "../../public/chat-bot.png";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="z-10 flex flex-col items-center justify-center px-8 py-24"
    >
      <div className="flex max-w-screen-lg flex-col gap-8 text-center lg:mt-8 lg:gap-12">
        <div>
          <h1 className="text-[clamp(2.7rem,5cqw,5rem)] font-bold leading-tight">
            {" "}
            Znajdź swojego{" "}
            <span className="text-color-primary">promotora!</span>
          </h1>
          <p className="mx-auto max-w-screen-md pt-8 text-[clamp(1.2rem,2cqw,1.75rem)]">
            {" "}
            Nasz system rekomendacyjny dopasuje go do tytułu lub opisu twojej
            pracy dyplomowej.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 text-lg md:flex-row">
          <Button
            asChild
            variant={"secondary"}
            className="rounded-xl px-6 py-7 text-lg"
          >
            <Link
              className="flex items-center justify-center gap-2"
              href="/chat"
            >
              Wypróbuj <ArrowUpRight size={32} />
            </Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="rounded-xl bg-transparent px-5 py-6 text-lg md:px-6 md:py-7"
          >
            <Link href="">Dowiedz się więcej</Link>
          </Button>
        </div>
        <div className="flex max-w-screen-lg flex-col items-center justify-center text-left text-lg leading-snug text-t-secondary lg:flex-row-reverse lg:items-start lg:gap-5">
          <div className="mt-4 max-h-32 max-w-xs rounded-3xl bg-chat-user px-5 py-4 text-t-secondary">
            <p>
              {" "}
              Wpływ modernistycznego stylu w projektowaniu stron internetowychna
              percepcję i doświadczenia użytkownika.
            </p>
          </div>
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start">
            <div className="relative lg:mt-6">
              <div className="container relative mt-4 h-auto max-w-xs rounded-3xl bg-chat-bot px-5 py-4">
                {/* <div className="absolute left-1/2 -top-5 lg:left-[96%] lg:top-1/3 w-0 h-0 border-l-[1.25rem] border-r-[1.25rem] border-b-[1.25rem] border-transparent border-b-colorChatBot lg:transform lg:rotate-90"></div> */}
                <p>
                  Oto{" "}
                  <span className="font-semibold text-color-primary">
                    {" "}
                    promotorzy{" "}
                  </span>
                  , którzy mogą Ci pomóc w realizacji tego tematu:
                </p>
                <p className="pt-2 text-xl font-semibold">Dr hab. Anna Nowak</p>
                <p>
                  Specjalistka w dziedzinie UX Design i Psychologii Internetu
                </p>
                <p className="pt-2 text-xl font-semibold"> Dr Jan Kowalski</p>
                <p>Specjalistka w dziedzinie UX Design</p>
              </div>
            </div>
            <Image src={ChatBot} alt="" className="max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}
