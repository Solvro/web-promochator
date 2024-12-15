"use client";

import { notFound, useParams } from "next/navigation";

import type { Chat } from "@/types/chat";

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();

  // Get chats from local storage
  const chats =
    localStorage.getItem("chats") == null
      ? []
      : (JSON.parse(localStorage.getItem("chats")!) as Chat[]);

  // Find chat by uuid
  const chat = chats.find((c) => c.uuid === parameters.uuid);

  // If chat not found, return 404
  if (!chat) {
    notFound();
  }

  return <div>{chat.prompt}</div>;
}
