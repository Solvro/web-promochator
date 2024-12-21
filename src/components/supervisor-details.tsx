"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { useChats } from "@/hooks/use-chats";
import { useSupervisors } from "@/hooks/use-supervisors";
import { faculties } from "@/lib/faculties";
import type { Supervisor } from "@/types/supervisor";

function PaperEntry({ paper }: { paper: Supervisor["papers"][0] }) {
  return (
    <div className="min-w-80 flex-1 space-y-6 rounded-lg border border-paper-entry p-4">
      <h2 className="text-xl font-medium">{paper.title}</h2>
      <p className="leading-relaxed">{paper.description}</p>
    </div>
  );
}

function SupervisorDetails({ uuid }: { uuid: string }) {
  const { getSupervisor } = useSupervisors();
  const { getChat } = useChats();
  const supervisor = getSupervisor(uuid);
  const chat = getChat(supervisor?.chatUuid ?? "");

  if (supervisor === null) {
    notFound();
  }

  return (
    <>
      <div className="text-sm">
        {chat === null ? (
          <p className="text-color-muted">Czat został usunięty</p>
        ) : (
          <Link
            className="flex items-center gap-2 underline underline-offset-2"
            href={`/chat/${supervisor.chatUuid}`}
          >
            <ArrowLeft className="size-4" />
            <p>Zobacz czat</p>
          </Link>
        )}
      </div>
      <p className="italic">&quot;{supervisor.prompt}&quot;</p>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">{supervisor.name}</h1>
        <p>{faculties[supervisor.faculty] || "Nieznany wydział"}</p>
      </div>
      <hr className="bg-t-secondary/60" />
      <div className="flex flex-wrap gap-4">
        {supervisor.papers.map((paper) => (
          <PaperEntry key={paper.title} paper={paper} />
        ))}
      </div>
    </>
  );
}

export { SupervisorDetails };
