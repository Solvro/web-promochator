import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NotebookPen, Star } from "lucide-react";
import Link from "next/link";

export function ChatSidebar() {
  return (
    <Sidebar className="bg-backgroundSidebar">
      <SidebarHeader className="flex-row justify-between">
        <SidebarTrigger />
        <div>
          <Button size="icon" variant="transparent" title="Zamknij menu">
            <Star size={24} />
          </Button>
          <Button size="icon" variant="transparent" title="Zamknij menu">
            <NotebookPen size={24} />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dzisiaj</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <span>Wpływ modernistycznego...</span>
                    <Button
                      size="icon"
                      className="gro"
                      variant="transparent"
                      title="Oznacz jako ulubione"
                    >
                      <Star size={12} />
                    </Button>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
