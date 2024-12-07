import { Chat, PromochatorIcon } from "@/components/Chat";
import { Supervisor } from "@/components/Supervisor";

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-4 flex-grow items-center justify-center">
      <Chat />
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <PromochatorIcon imageWidth={36} imageHeight={36} imageClassName="py-2 px-1" />
          <p className="py-3 px-4 bg-chat-bot rounded-2xl">Oto promotorzy, którzy mogą Ci pomóc w realizacji tego tematu:</p>
        </div>
        <Supervisor />
      </div>
    </div>
  );
}
