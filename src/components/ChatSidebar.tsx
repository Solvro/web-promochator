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
    <Sidebar>
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
                  <Link href="/">Wpływ modernistycznego...</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
