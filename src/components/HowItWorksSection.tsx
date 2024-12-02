import Image, { StaticImageData } from "next/image";
import Step1Button from "../../public/step1-button.png";
import Step2Describe from "../../public/step2-describe-chat.png";
import Step3Answer from "../../public/step3-answer.png";

interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
    image: StaticImageData;
    reverse?: boolean;
    width?: number;
    height?: number;
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
        <div className="flex flex-col gap-6 items-center justify-center text-center">
            <div className="flex flex-col gap-5">
                <p className="text-colorMuted text-lg">Krok po kroku</p>
                <h3 className="text-5xl font-bold">
                    Jak to <span className="text-colorPrimary">działa?</span>
                </h3>
            </div>
            <div className="flex flex-col gap-14 py-20 max-w-screen-xl text-left">
                {steps.map((step) => (
                    <StepCard
                        key={step.stepNumber}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                        image={step.image}
                        reverse={step.reverse}
                        width={step.width}
                        height={step.height}
                    />
                ))}
            </div>
        </div>
    );
}

function StepCard({
    stepNumber,
    title,
    description,
    image,
    reverse,
    width = 300,
    height = 300,
}: StepCardProps) {
    return (
        <div
            className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className="w-full md:w-1/2 px-8 text-xl">
                <p className="text-colorMuted">Krok {stepNumber}</p>
                <p className="text-3xl pt-2 font-semibold">{title}</p>
                <p className="pt-3">{description}</p>
            </div>
            <div className="flex justify-center items-center w-1/2">
                <Image src={image} alt={''} width={width} height={height} />
            </div>
        </div>
    );
}