"use client";

import { NotebookPen, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
import { useSupervisors } from "@/hooks/use-supervisors";

type Tab = "chats" | "supervisors";

export function ChatSidebar() {
  const { chats } = useChats();
  const { supervisors } = useSupervisors();
  const [tab, setTab] = useState<Tab>("chats");
  const chooseTab = () => {
    switch (tab) {
      case "chats": {
        return chats.map((chat) => (
          <ChatSidebarLink
            key={chat.uuid}
            uuid={chat.uuid}
            href={`/chat/${chat.uuid}`}
            title={chat.prompt}
          />
        ));
      }

      case "supervisors": {
        return supervisors.map((supervisor) => (
          <ChatSidebarLink
            key={supervisor.uuid}
            uuid={supervisor.uuid}
            href={`/supervisor/${supervisor.uuid}`}
            title={supervisor.prompt}
          />
        ));
      }
    }
  };

  return (
    <Sidebar className="border-sidebar">
      <SidebarHeader className="flex-row justify-between px-4 pb-0 pt-4">
        <ChatSidebarTrigger />
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="transparent"
            title={tab === "chats" ? "Zapisani promotorzy" : "Czaty"}
            onClick={() => {
              setTab((previousTab) => {
                return previousTab === "chats" ? "supervisors" : "chats";
              });
            }}
          >
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
            <SidebarMenu>{chooseTab()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
