"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Supervisor() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="inline-flex flex-col gap-4 rounded-2xl bg-chat-bot p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">Dr hab. Anna Nowak</p>
          <p>Specjalistka w dziedzinie UX Design i Psychologii</p>
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
      {isOpen && (
        <p className="w-0 min-w-full">
          Współpracowała z wieloma firmami IT, pomagając im tworzyć produkty
          przyjazne dla użytkownika.
        </p>
      )}
    </div>
  );
}
