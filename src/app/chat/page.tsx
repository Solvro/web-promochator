import { Chat } from "@/components/Chat";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatPage() {
  return (
    <div>
      <SidebarTrigger />
      <Chat />
    </div>
  );
}
