import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/ChatSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <div className="flex h-screen w-full flex-col bg-chat text-white">
        <SidebarTrigger className="border-0" />
        {children}
      </div>
    </SidebarProvider>
  );
}
