"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";

import { useChats } from "@/hooks/use-chats";
import { mockFetch } from "@/lib/mock-fetch";
import type { RecommendationsResponse } from "@/types/api-types";

export function Conversation({ uuid }: { uuid: string }) {
  const { getChat, updateChat } = useChats();
  const chat = getChat(uuid);

  useEffect(() => {
    const fetchRecommendation = async () => {
      console.log(`Calling promochator api!`);
      const response = await mockFetch("/api/recommend");
      const data = (await response.json()) as RecommendationsResponse;
      updateChat(uuid, { recommendation: data.recommendation });
    };

    if (!chat?.recommendation) {
      void fetchRecommendation();
    }

    console.log(chat?.recommendation);
  }, [chat?.recommendation, uuid, updateChat]);

  if (chat === null) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <p>{chat.prompt}</p>
      <p>{chat.recommendation?.hello_message}</p>
      {chat.recommendation?.recommended_supervisors.map((supervisor) => (
        <div key={supervisor.name}>
          <p>{supervisor.name}</p>
          <p>{supervisor.faculty}</p>
          {supervisor.papers.map((paper) => (
            <div key={paper.title}>
              <p>{paper.title}</p>
              <p>{paper.descripiton}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
