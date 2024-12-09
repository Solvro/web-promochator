import { ChatSidebar } from "@/components/chat-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <div className="flex h-screen w-full flex-col bg-chat-background text-white">
        <SidebarTrigger className="border-0" />
        {children}
      </div>
    </SidebarProvider>
  );
}
