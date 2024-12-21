"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function ChatSidebarTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      onClick={toggleSidebar}
      size="icon"
      variant="transparent"
      title="Zamknij panel boczny"
      className="hover:bg-sidebar-accent"
    >
      <X size={24} />
    </Button>
  );
}
