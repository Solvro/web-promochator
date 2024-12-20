import { Trash2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useChats } from "@/hooks/use-chats";

export function ChatSidebarLink({
  uuid,
  title,
}: Readonly<{ uuid: string; title: string }>) {
  const chats = useChats();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={`/chats/${uuid}`}
          className="flex flex-row items-center justify-between"
        >
          <span className="truncate">{title}</span>
          <Button
            size="icon"
            className="flex-none transition hover:text-red-500"
            variant="transparent"
            title="Oznacz jako ulubione"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              chats.removeChat(uuid);
            }}
          >
            <Trash2 size={16} />
          </Button>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
