import { ChatSidebar } from "@/components/chat-sidebar";
import { ClientOnly } from "@/components/client-only";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <div className="flex h-full min-h-dvh w-full flex-col bg-chat-background text-white">
        <ClientOnly>
          <SidebarTrigger className="border-0" />
          <div className="flex h-screen w-full flex-col bg-chat-background text-white">
            {children}
          </div>
        </ClientOnly>
      </div>
    </SidebarProvider>
  );
}
