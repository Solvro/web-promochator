"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Supervisor({
  name,
  specialization,
  description,
  highlight,
}: {
  name: string;
  specialization: string;
  description: string;
  highlight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("inline-flex flex-col gap-4 rounded-2xl p-4", highlight ? "bg-chat-user" : "bg-chat-bot")}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">{name}</p>
          <p>{specialization}</p>
        </div>
        <Button
          size="icon"
          variant="transparent"
          title="Rozwiń"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp size={36} /> : <ChevronDown size={36} />}
        </Button>
      </div>
      {isOpen && <p className="w-0 min-w-full">{description}</p>}
    </div>
  );
}
