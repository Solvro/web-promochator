import { Database, MonitorSmartphone, Star } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="size-24 bg-backgroundChatBot rounded-full flex items-center justify-center">
        <div className="size-16 bg-backgroundChatUser rounded-full flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold">{title}</p>
      <p className="max-w-sm">{description}</p>
    </div>
  );
}

export function DetailsSection() {
  const iconClass = "size-8";

  const cards: FeatureCardProps[] = [
    {
      icon: <MonitorSmartphone className={iconClass} />,
      title: "Przyjazny interfejs",
      description:
        "Znajomy, intuicyjny wygląd strony szybko pomoże ci znaleźć promotora.",
    },
    {
      icon: <Database className={iconClass} />,
      title: "Bogata baza danych",
      description:
        "System rekomendacji został utworzony dzięki analizie dorobku naukowego profesorów Politechniki Wrocławskiej.",
    },
    {
      icon: <Star className={iconClass} />,
      title: "Zapis rekomendacji",
      description:
        "Po rozmowie z naszym systemem możesz zapisać istotne dla ciebie rekomendacje wewnątrz aplikacji.",
    },
  ];

  return (
    <section id="details" className="flex flex-col gap-6 items-center justify-center text-center">
      <div className="flex flex-col gap-4">
        <p className="text-colorMuted text-lg">Szczegóły</p>
        <h3 className="text-5xl font-bold">
          Jak ci <span className="text-colorPrimary">pomożemy?</span>
        </h3>
        <p className="max-w-lg text-lg font-medium">
          Nasza aplikacja została zaprojektowana tak, aby najlepiej pomóc
          studentom Politechniki Wrocławskiej z doborem promotora do ich prac
          dyplomowych.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {cards.map((card) => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
