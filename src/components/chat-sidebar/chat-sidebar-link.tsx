"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function ChatSidebarLink({
  uuid,
  title,
  removeChat,
  toRedirect,
}: Readonly<{
  uuid: string;
  title: string;
  removeChat: (_uuid: string) => void;
  toRedirect: boolean;
}>) {
  const router = useRouter();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={`/chat/${uuid}`}
          className="flex flex-row items-center justify-between"
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
              if (toRedirect) {
                console.log("INSIDE REDIRECTING");
                router.replace("/chat");
              }
            }}
          >
            <Trash2 size={16} />
          </Button>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
