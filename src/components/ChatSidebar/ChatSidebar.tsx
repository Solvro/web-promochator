"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NotebookPen, Star } from "lucide-react";
import { ChatSidebarTrigger } from "@/components/ChatSidebar/ChatSidebarTrigger";
import { ChatSidebarLink } from "@/components/ChatSidebar/ChatSidebarLink";

export function ChatSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex-row justify-between px-4 pt-4 pb-0">
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
              <ChatSidebarLink
                href={"/chat"}
                title={"Wpływ modernistycznego lorem ipsum"}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
