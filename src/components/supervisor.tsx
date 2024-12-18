"use client";

import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Supervisor({
  name,
  faculty,
  papers,
  highlight,
}: {
  name: string;
  faculty: string;
  papers: {
    title: string;
    description: string;
  }[];
  highlight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(highlight ?? false);
  return (
    <div className="flex w-full flex-row gap-2">
      <Button variant="transparent" size="icon">
        <Star size={24} />
      </Button>
      <div
        className={cn(
          "inline-flex w-full flex-col gap-4 rounded-2xl p-4",
          (highlight ?? false)
            ? "bg-message-primary"
            : "border border-message-primary bg-transparent",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">{name}</p>
            <p>{faculty}</p>
          </div>
          <Button
            size="icon"
            variant="transparent"
            title="Rozwiń"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <ChevronUp size={36} /> : <ChevronDown size={36} />}
          </Button>
        </div>
        {isOpen ? (
          <div className="flex w-0 min-w-full flex-col gap-4">
            {papers.map(({ title, description }, key) => (
              <div key={key} className="flex flex-col gap-1">
                <p className="text-lg font-medium">{title}</p>
                <p>{description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
