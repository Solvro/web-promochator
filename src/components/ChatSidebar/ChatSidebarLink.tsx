import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function ChatSidebarLink({
  href,
  title,
}: Readonly<{ href: string; title: string }>) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={href}>
          <span className="truncate">{title}</span>
          <Button
            size="icon"
            className="flex-none"
            variant="transparent"
            title="Oznacz jako ulubione"
            onClick={(e) => {
              // Prevent link from redirecting
              e.preventDefault();
              e.stopPropagation();
              // TODO: implement button action
            }}
          >
            <Star size={16} />
          </Button>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
