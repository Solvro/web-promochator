"use client";

import { Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Supervisor({
  name,
  faculty,
  papers,
}: {
  name: string;
  faculty: string;
  papers: {
    title: string;
    description: string;
  }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full flex-row gap-2">
      <Button variant="transparent" size="icon">
        <Star size={24} />
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
          <AccordionContent className="space-y-2 p-0">
            {papers.map(({ title, description }, key) => (
              <div key={key} className="flex flex-col gap-1">
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
