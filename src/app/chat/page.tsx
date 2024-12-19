import { Chat, PromochatorIcon } from "@/components/chat";
import { Supervisor } from "@/components/supervisor";

export default function ChatPage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-4">
      <Chat />
      <div className="w-full max-w-7xl space-y-4 p-8">
        <div className="flex items-center gap-4">
          <PromochatorIcon
            imageWidth={36}
            imageHeight={36}
            imageClassName="py-2 px-1"
          />
          <p className="rounded-2xl bg-message-primary px-4 py-3">
            Oto promotorzy, którzy mogą Ci pomóc w realizacji tego tematu:
          </p>
        </div>
        <Supervisor
          name="Dr hab. Anna Nowak"
          faculty="Faculty of Computer Science"
          papers={[
            {
              title: "Modern Web Development Frameworks",
              description:
                "This paper discusses various frameworks used in modern web development, comparing their performance and usability.",
            },
            {
              title: "Responsive Design Techniques",
              description:
                "An exploration of techniques for creating responsive web applications that work on various devices.",
            },
          ]}
        />
        <Supervisor
          name="Dr hab. Anna Nowak"
          faculty="Faculty of Computer Science"
          papers={[
            {
              title: "Modern Web Development Frameworks",
              description:
                "This paper discusses various frameworks used in modern web development, comparing their performance and usability.",
            },
            {
              title: "Responsive Design Techniques",
              description:
                "An exploration of techniques for creating responsive web applications that work on various devices.",
            },
          ]}
        />
      </div>
    </div>
  );
}
