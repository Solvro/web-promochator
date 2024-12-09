import type { StaticImageData } from "next/image";
import Image from "next/image";

import Step1Button from "../../public/step1-button.png";
import Step2Describe from "../../public/step2-describe-chat.png";
import Step3Answer from "../../public/step3-answer.png";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Wejdź do naszego czatu.",
      description:
        "Rozpocznij rozmowę w prosty sposób — wystarczy jedno kliknięcie, aby otworzyć nasz inteligentny czat.",
      image: Step1Button,
      width: 200,
      height: 200,
    },
    {
      stepNumber: 2,
      title: "Podaj temat i krótki opis swojej pracy.",
      description:
        "Możesz również określić preferencje, takie jak specjalizacja promotora czy styl współpracy.",
      image: Step2Describe,
      reverse: true,
      width: 300,
      height: 300,
    },
    {
      stepNumber: 3,
      title: "Otrzymaj propozycję promotora.",
      description:
        "W ciągu kilku chwil otrzymasz propozycję promotora, który najlepiej odpowiada Twoim potrzebom. Skorzystaj z jego wiedzy i doświadczenia, aby sprawnie przygotować swoją pracę",
      image: Step3Answer,
      width: 400,
      height: 300,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center justify-center gap-6 pt-10 text-center"
    >
      <div className="flex flex-col gap-5">
        <p className="text-lg text-color-muted">Krok po kroku</p>
        <h3 className="text-5xl font-bold">
          Jak to <span className="text-color-primary">działa?</span>
        </h3>
      </div>
      <div className="flex max-w-screen-xl flex-col gap-14 py-14 text-left">
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            image={step.image}
            reverse={step.reverse}
            imageWidth={step.width}
            imageHeight={step.height}
          />
        ))}
      </div>
    </section>
  );
}

function StepCard({
  stepNumber,
  title,
  description,
  image,
  reverse,
  imageWidth = 300,
  imageHeight = 300,
}: StepCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-8 md:flex-row ${
        reverse === true ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full px-8 text-xl md:w-1/2">
        <p className="text-color-muted">Krok {stepNumber}</p>
        <p className="pt-2 text-3xl font-semibold">{title}</p>
        <p className="pt-3">{description}</p>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <Image src={image} alt={""} width={imageWidth} height={imageHeight} />
      </div>
    </div>
  );
}
