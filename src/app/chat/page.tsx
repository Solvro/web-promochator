import { Supervisor } from "@/components/Supervisor";
import { Chat, PromochatorIcon } from "@/components/chat";

export default function ChatPage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-4">
      <Chat />
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <PromochatorIcon
            imageWidth={36}
            imageHeight={36}
            imageClassName="py-2 px-1"
          />
          <p className="rounded-2xl bg-chat-bot px-4 py-3">
            Oto promotorzy, którzy mogą Ci pomóc w realizacji tego tematu:
          </p>
        </div>
        <Supervisor
          name="Dr hab. Anna Nowak"
          specialization="Specjalistka w dziedzinie UX Design i Psychologii"
          description="Współpracowała z wieloma firmami IT, pomagając im tworzyć produkty
          przyjazne dla użytkownika."
          highlight
        />
      </div>
    </div>
  );
}
