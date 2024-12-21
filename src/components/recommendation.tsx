import { useQuery } from "@tanstack/react-query";
import { v4 } from "uuid";

import { mockFetch } from "@/lib/mock-fetch";
import type { RecommendationResponse } from "@/types/api-types";
import type { Chat } from "@/types/chat";
import type { Supervisor as ISupervisor } from "@/types/supervisor";

import { PromochatorIcon } from "./chat";
import { Supervisor } from "./supervisor";

function useRecommendationQuery(
  chat: Chat,
  updateChat: (uuid: string, _chat: Partial<Chat>) => void,
) {
  return useQuery({
    queryKey: ["recommendation", chat.uuid],
    queryFn: async () => {
      const response = await mockFetch("/api/recommend");
      // const response = await fetch("/api/recommend", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     input: { question: chat.prompt, faculty: "" },
      //   }),
      // });

      const data = (await response.json()) as RecommendationResponse;
      const supervisorsWithUuid =
        data.recommendation.recommended_supervisors.map((s) => {
          return { ...s, uuid: v4() } as ISupervisor;
        });
      updateChat(chat.uuid, {
        helloMessage: data.recommendation.hello_message,
        supervisors: supervisorsWithUuid,
      });
      return data;
    },
    enabled: chat.helloMessage === undefined,
    retry: false,
  });
}

export function Recommendation({
  chat,
  updateChat,
}: {
  chat: Chat;
  updateChat: (uuid: string, _chat: Partial<Chat>) => void;
}) {
  const { isLoading, error } = useRecommendationQuery(chat, updateChat);

  if (isLoading) {
    //TODO Loading UI
    return <div>Loading...</div>;
  }

  if (error) {
    //TODO Error
    return <div>Error loading recommendations</div>;
  }

  return (
    <div className="w-full max-w-7xl space-y-4 p-8">
      <div className="flex items-center gap-4">
        <PromochatorIcon
          imageWidth={40}
          imageHeight={40}
          imageClassName="py-2 px-1"
        />
        <p className="rounded-2xl bg-message-primary px-4 py-3">
          {chat.helloMessage}
        </p>
      </div>
      {chat.supervisors?.map((supervisor) => (
        <Supervisor
          key={supervisor.uuid}
          supervisor={supervisor}
          prompt={chat.prompt}
          chatUuid={chat.uuid}
        />
      ))}
    </div>
  );
}
