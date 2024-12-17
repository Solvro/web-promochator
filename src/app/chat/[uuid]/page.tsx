"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useChats } from "@/hooks/use-chats";
import type { Chat } from "@/types/chat";

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();
  const { getChat } = useChats();
  const [chat, setChat] = useState<Chat | null | undefined>(null);

  useEffect(() => {
    const foundChat = getChat(parameters.uuid);
    setChat(foundChat);

    //TODO call api there
  }, [parameters.uuid, getChat]);

  if (chat === null) {
    return;
  }

  if (chat === undefined) {
    notFound();
  }

  return <div>{chat.prompt}</div>;
}
