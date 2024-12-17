"use client";

import { NotebookPen, Star } from "lucide-react";
import Link from "next/link";

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
import type { Chat } from "@/types/chat";

export function ChatSidebar() {
  const chats =
    localStorage.getItem("chats") == null
      ? []
      : (JSON.parse(localStorage.getItem("chats")!) as Chat[]);
  return (
    <Sidebar className="border-sidebar">
      <SidebarHeader className="flex-row justify-between px-4 pb-0 pt-4">
        <ChatSidebarTrigger />
        <div className="flex gap-2">
          <Button size="icon" variant="transparent" title="Ulubione rozmowy">
            <Star size={24} />
          </Button>
          <Button
            size="icon"
            variant="transparent"
            title="Utwórz nową rozmowę"
            asChild
          >
            <Link href="/chat">
              <NotebookPen size={24} />
            </Link>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel>Dzisiaj</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map(({ uuid, prompt }) => (
                <ChatSidebarLink
                  key={uuid}
                  href={`/chat/${uuid}`}
                  title={prompt}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
