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
  useSidebar,
} from "@/components/ui/sidebar";
import { useChats } from "@/hooks/use-chats";
import { useSupervisors } from "@/hooks/use-supervisors";

import { BugReportForm } from "../bug-report-form";
import { SupervisorSidebarLink } from "./supervisor-sidebar-link";

export type Tab = "chats" | "supervisors";

export function ChatSidebar() {
  const { chats, removeChat } = useChats();
  const { supervisors, removeSupervisor } = useSupervisors();
  const { setOpenMobile } = useSidebar();
  const [tab, setTab] = useState<Tab>("chats");
  const switchTab = () => {
    switch (tab) {
      case "chats": {
        return chats.map((chat) => (
          <ChatSidebarLink
            key={chat.uuid}
            uuid={chat.uuid}
            title={chat.prompt}
            removeChat={removeChat}
          />
        ));
      }

      case "supervisors": {
        return supervisors.map((supervisor) => (
          <SupervisorSidebarLink
            key={supervisor.uuid}
            uuid={supervisor.uuid}
            name={supervisor.name}
            prompt={supervisor.prompt}
            removeSupervisor={removeSupervisor}
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
            className="hover:bg-sidebar-accent"
          >
            <Star
              size={24}
              fill={tab === "supervisors" ? "#F7B900" : ""}
              color={tab === "supervisors" ? "#F7B900" : "currentColor"}
            />
          </Button>
          <Button
            size="icon"
            variant="transparent"
            title="Utwórz nową rozmowę"
            className="hover:bg-sidebar-accent"
            onClick={() => {
              setOpenMobile(false);
            }}
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
          <SidebarGroupLabel className="mb-2 text-2xl font-semibold">
            {tab === "chats" ? "Czaty" : "Promotorzy"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{switchTab()}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <BugReportForm triggerVariant="icon" />
    </Sidebar>
  );
}
