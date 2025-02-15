"use client";

import { ArrowLeft, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useChats } from "@/hooks/use-chats";
import { useSupervisors } from "@/hooks/use-supervisors";
import { faculties } from "@/lib/faculties";
import type { Paper } from "@/types/supervisor";

function PaperEntry({ paper }: { paper: Paper }) {
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
  const router = useRouter();

  useEffect(() => {
    if (supervisor === null) {
      router.replace("/chat");
    }
  }, [supervisor, router]);

  return supervisor === null ? null : (
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
      <h2
        className="flex items-center gap-2 text-xl text-color-primary"
        title={`${supervisor.name} jest jednym z autorów poniższych prac`}
      >
        <FileText />
        Prace naukowe
      </h2>
      <div className="flex flex-wrap gap-4">
        {supervisor.papers.map((paper) => (
          <PaperEntry key={paper.title} paper={paper} />
        ))}
      </div>
      {supervisor.theses.length > 0 && (
        <>
          <h2
            className="flex items-center gap-2 text-xl text-color-primary"
            title={`${supervisor.name} był/a promotorem poniższych prac`}
          >
            <GraduationCap />
            Promotor
          </h2>
          <div className="flex flex-wrap gap-4">
            {supervisor.theses.map((thesis) => (
              <PaperEntry key={thesis.title} paper={thesis} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export { SupervisorDetails };
