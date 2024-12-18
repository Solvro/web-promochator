"use client";

import { NotebookPen, Star } from "lucide-react";

import { ChatSidebarLink } from "@/components/chat-sidebar/chat-sidebar-link";
import { ChatSidebarTrigger } from "@/components/chat-sidebar/chat-sidebar-trigger";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { useChats } from "@/hooks/use-chats";

export function ChatSidebar() {
  const { chats } = useChats();
  return (
    <Sidebar className="border-sidebar">
      <SidebarHeader className="flex-row justify-between px-4 pb-0 pt-4">
        <ChatSidebarTrigger />
        <div className="flex gap-2">
          <Button size="icon" variant="transparent" title="Ulubione rozmowy">
            <Star size={24} />
          </Button>
          <Button size="icon" variant="transparent" title="Utwórz nową rozmowę">
            <NotebookPen size={24} />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel>Dzisiaj</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <ChatSidebarLink
                  key={chat.uuid}
                  href={`/chat/${chat.uuid}`}
                  title={chat.prompt}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
