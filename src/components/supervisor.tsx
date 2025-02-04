"use client";

import { useMutation } from "@tanstack/react-query";
import {
  FileText,
  GraduationCap,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useChats } from "@/hooks/use-chats";
import { useSupervisors } from "@/hooks/use-supervisors";
import { faculties } from "@/lib/faculties";
import type { Feedback } from "@/types/api-types";
import type { Supervisor as SupervisorType } from "@/types/supervisor";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Supervisor({
  supervisor,
  chatUuid,
  prompt,
  promptFaculty,
}: {
  supervisor: SupervisorType;
  chatUuid: string;
  prompt: string;
  promptFaculty?: string;
}) {
  const { uuid, faculty, name, papers, theses, isAdequate } = { ...supervisor };
  const { updateSupervisor } = useChats();
  const { addSupervisor, getSupervisor, removeSupervisor } = useSupervisors();
  const isSaved = getSupervisor(uuid) !== null;

  const mutation = useMutation({
    mutationFn: async (feedback: Feedback) => {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(feedback),
      });
      if (!response.ok) {
        throw new Error(
          `Wystąpił błąd podczas wysyłania feedbacku: status = ${response.statusText}`,
        );
      }

      updateSupervisor(chatUuid, {
        ...supervisor,
        isAdequate: feedback.is_adequate,
      });
    },
  });

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
          <div className="flex items-center justify-end pt-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <span className="mr-2 pt-1">
                    Czy ta rekomendacja była sensowna?
                  </span>
                </TooltipTrigger>
                <TooltipContent className="text-center">
                  <span>
                    Odpowiadając na pytanie pomagasz nam dostrajać model,
                    <br />
                    co przełoży się na bardziej jakościowe rekomendacje 😉
                  </span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              variant="transparent"
              size="icon"
              className="hover:bg-chat-user disabled:opacity-100"
              onClick={() => {
                const newIsAdequate = true;

                mutation.mutate({
                  question: prompt,
                  supervisor_name: supervisor.name,
                  faculty: promptFaculty,
                  is_adequate: newIsAdequate,
                });
              }}
              disabled={isAdequate !== undefined}
            >
              <ThumbsUp
                size={20}
                className={
                  isAdequate === undefined
                    ? "fill-transparent"
                    : isAdequate
                      ? "fill-white/70"
                      : "fill-transparent"
                }
              />
            </Button>
            <Button
              size="icon"
              variant="transparent"
              className="hover:bg-chat-user disabled:opacity-100"
              onClick={() => {
                const newIsAdequate = false;

                mutation.mutate({
                  question: prompt,
                  supervisor_name: supervisor.name,
                  faculty: promptFaculty,
                  is_adequate: newIsAdequate,
                });
              }}
              disabled={isAdequate !== undefined}
            >
              <ThumbsDown
                size={20}
                className={
                  isAdequate === undefined
                    ? "fill-transparent"
                    : isAdequate
                      ? "fill-transparent"
                      : "fill-white/70"
                }
              />
            </Button>
          </div>
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}
