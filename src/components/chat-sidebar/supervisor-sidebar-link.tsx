import { Trash2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function SupervisorSidebarLink({
  uuid,
  name,
  prompt,
  removeSupervisor,
}: Readonly<{
  uuid: string;
  name: string;
  prompt: string;
  removeSupervisor: (_uuid: string) => void;
}>) {
  return (
    <SidebarMenuItem className="rounded-md border-2 border-sidebar-accent">
      <SidebarMenuButton asChild>
        <Link
          href={`/supervisor/${uuid}`}
          className="flex h-fit flex-row items-center justify-between"
        >
          <div className="flex flex-col truncate">
            <span className="truncate font-semibold">{name}</span>
            <span className="truncate">{prompt}</span>
          </div>
          <Button
            size="icon"
            className="flex-none transition hover:text-red-500"
            variant="transparent"
            title="Usuń"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              removeSupervisor(uuid);
            }}
          >
            <Trash2 size={16} />
          </Button>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
