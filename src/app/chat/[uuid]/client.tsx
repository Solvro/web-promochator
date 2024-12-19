"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

import type { ApiResponse } from "@/types/api-types";
import type { Chat } from "@/types/chat";

export function ClientConversation({ uuid }: { uuid: string }) {
  const [modelResponse, setModelResponse] = useState<ApiResponse | null>(null);

  // Get chat data from localStorage
  const chats =
    localStorage.getItem("chats") == null
      ? []
      : (JSON.parse(localStorage.getItem("chats")!) as Chat[]);

  const chat = chats.find((c) => c.uuid === uuid);

  if (!chat) {
    notFound();
  }

  useEffect(() => {
    // Fetch data using an API route
    const fetchModelResponse = async (): Promise<void> => {
      const response = await fetch("/api/recommend", {
        method: "POST",
        body: JSON.stringify({
          input: { question: chat.prompt, faculty: "" },
        }),
      });
      const data = (await response.json()) as ApiResponse;
      console.log(data.recommendation);
      setModelResponse(data);
    };
    fetchModelResponse();
    console.log(modelResponse);
  }, [modelResponse, chat]);

  return (
    <div>
      <div>{chat.prompt}</div>
    </div>
  );
}
