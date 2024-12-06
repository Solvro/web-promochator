import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/ChatSidebar";

export default function ChatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <div className="bg-chat-background flex h-screen w-full flex-col text-white">
        <SidebarTrigger className="border-0" />
        {children}
      </div>
    </SidebarProvider>
  );
}
