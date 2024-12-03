"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function ChatSidebarTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      onClick={toggleSidebar}
      size="icon"
      variant="transparent"
      title="Zamknij panel boczny"
    >
      <X size={24} />
    </Button>
  );
}
