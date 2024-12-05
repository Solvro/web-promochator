import { Chat } from "@/components/Chat";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatPage() {
  return (
    <div className="flex h-screen w-screen bg-chat">
      <SidebarTrigger className="border-0 text-white" />
      <div className="flex flex-grow items-center justify-center">
        <Chat />
      </div>
    </div>
  );
}
