"use client";

import { Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useSupervisors } from "@/hooks/use-supervisors";
import { cn } from "@/lib/utils";
import type { Supervisor as ISupervisor } from "@/types/supervisor";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Supervisor({
  supervisor: { uuid, faculty, name, papers },
  chatUuid,
  prompt,
}: {
  supervisor: ISupervisor;
  chatUuid: string;
  prompt: string;
}) {
  const { addSupervisor, getSupervisor, removeSupervisor } = useSupervisors();
  const [open, setOpen] = useState(false);
  const isSaved = getSupervisor(uuid) !== null;

  return (
    <div className="flex w-full flex-row gap-2">
      <Button
        variant="transparent"
        size="icon"
        title={isSaved ? "Usuń" : "Zapisz"}
        onClick={
          isSaved
            ? () => {
                removeSupervisor(uuid);
              }
            : () => {
                addSupervisor({
                  uuid,
                  faculty,
                  name,
                  papers,
                  prompt,
                  chatUuid,
                });
              }
        }
      >
        <Star
          fill={isSaved ? "#F7B900" : ""}
          color={isSaved ? "#F7B900" : "currentColor"}
          size={24}
        />
      </Button>
      <Accordion
        type="single"
        collapsible
        className={cn(
          open ? "bg-message-primary" : "border border-message-primary",
          "w-full rounded-2xl p-4 transition",
        )}
      >
        <AccordionItem value="id" className="space-y-4">
          <AccordionTrigger
            className="py-0"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">{name}</p>
              <p>{faculty}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 p-0">
            {papers.map(({ title, description }) => (
              <div key={title} className="flex max-w-lg flex-col gap-1">
                <p className="text-lg font-medium">{title}</p>
                <p>{description}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
