"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function ChatSidebarLink({
  uuid,
  title,
  removeChat,
}: Readonly<{
  uuid: string;
  title: string;
  removeChat: (_uuid: string) => void;
}>) {
  const pathname = usePathname();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={`/chat/${uuid}`}
          className={cn(
            "flex flex-row items-center justify-between",
            pathname.includes(uuid) ? "bg-chat-user" : "",
          )}
        >
          <span className="truncate">{title}</span>
          <Button
            size="icon"
            className="flex-none transition hover:text-red-500"
            variant="transparent"
            title="Usuń"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              removeChat(uuid);
            }}
          >
            <Trash2 size={16} />
          </Button>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
