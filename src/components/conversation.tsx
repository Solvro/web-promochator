"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";

import { useChats } from "@/hooks/use-chats";
import { mockFetch } from "@/lib/mock-fetch";
import type { RecommendationsResponse } from "@/types/api-types";

import { PromochatorIcon } from "./chat";
import { Supervisor } from "./supervisor";

export function Conversation({ uuid }: { uuid: string }) {
  const { getChat, updateChat } = useChats();
  const chat = getChat(uuid);

  if (chat === null) {
    notFound();
  }

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await mockFetch("/api/recommend");
        // const response = await fetch("/api/recommend", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     input: { question: chat.prompt, faculty: "" },
        //   }),
        // });
        const data = (await response.json()) as RecommendationsResponse;
        updateChat(uuid, { recommendation: data.recommendation });
      } catch (error) {
        console.error(error);
      }
    };

    if (!chat.recommendation) {
      void fetchRecommendation();
    }
  }, [chat.recommendation, uuid, updateChat, chat.prompt]);

  return (
    <div className="flex max-h-[100dvh] flex-col overflow-y-auto">
      <div className="ml-auto mr-8 flex w-3/4 justify-end md:w-1/2">
        <p className="rounded-2xl bg-chat-user px-4 py-3">{chat.prompt}</p>
      </div>
      <div className="w-full max-w-7xl space-y-4 p-8">
        <div className="flex items-center gap-4">
          <PromochatorIcon
            imageWidth={40}
            imageHeight={40}
            imageClassName="py-2 px-1"
          />
          <p className="rounded-2xl bg-message-primary px-4 py-3">
            {chat.recommendation?.hello_message}
          </p>
        </div>
        {chat.recommendation?.recommended_supervisors.map((supervisor) => (
          <Supervisor
            key={supervisor.name}
            name={supervisor.name}
            faculty={supervisor.faculty}
            papers={supervisor.papers}
          />
        ))}
      </div>
    </div>
  );
}
