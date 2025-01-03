"use client";

import { FileText, GraduationCap, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSupervisors } from "@/hooks/use-supervisors";
import { faculties } from "@/lib/faculties";
import type { Supervisor as SupervisorType } from "@/types/supervisor";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Supervisor({
  supervisor: { uuid, faculty, name, papers, theses },
  chatUuid,
  prompt,
}: {
  supervisor: SupervisorType;
  chatUuid: string;
  prompt: string;
}) {
  const { addSupervisor, getSupervisor, removeSupervisor } = useSupervisors();
  const isSaved = getSupervisor(uuid) !== null;

  return (
    <AccordionItem value={uuid} className="group flex w-full flex-row gap-2">
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
                  theses,
                  prompt,
                  chatUuid,
                  createdAt: new Date(),
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
      <div className="w-full rounded-2xl border border-chat-bot p-4 transition group-data-[state=open]:bg-chat-bot">
        <AccordionTrigger className="py-0">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">{name}</p>
            <p>{faculties[faculty] || faculty}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-6 pb-2 pt-4">
          {papers.map(({ title, description }) => (
            <div key={title} className="flex max-w-lg flex-col gap-1">
              <div
                className="flex items-center gap-1 text-sm text-color-primary"
                title={`${name} jest jednym z autorów tej pracy`}
              >
                <FileText className="size-4" /> Praca naukowa
              </div>
              <p className="text-lg font-medium">{title}</p>
              <p>{description}</p>
            </div>
          ))}
          {theses.map(({ title, description }) => (
            <div key={title} className="flex max-w-lg flex-col gap-1">
              <div
                className="flex items-center gap-1 text-sm text-color-primary"
                title={`${name} był/a promotorem tej pracy`}
              >
                <GraduationCap className="size-4" /> Promotor
              </div>
              <p className="text-lg font-medium">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}
