import { useQuery } from "@tanstack/react-query";

import { mockFetch } from "@/lib/mock-fetch";
import type { RecommendationResponse } from "@/types/api-types";
import type { Chat } from "@/types/chat";

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
      updateChat(chat.uuid, { recommendation: data.recommendation });
      return data;
    },
    enabled: !chat.recommendation,
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
  );
}
