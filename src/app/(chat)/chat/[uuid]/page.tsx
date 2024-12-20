"use client";

import { notFound, useParams } from "next/navigation";

import { useChats } from "@/hooks/use-chats";

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();
  const { getChat } = useChats();
  const chat = getChat(parameters.uuid);
  if (chat === null) {
    notFound();
  }
  return <div>{chat.prompt}</div>;
}
