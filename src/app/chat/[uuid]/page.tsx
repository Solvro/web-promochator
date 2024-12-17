"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useChats } from "@/hooks/use-chats";
import type { Chat } from "@/types/chat";

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();
  const { getChat } = useChats();
  const [chat, setChat] = useState<Chat | null>(null);

  useEffect(() => {
    const targetChat = getChat(parameters.uuid);
    if (targetChat === null) {
      notFound();
    }
    setChat(targetChat);

    if (!targetChat.recommendation) {
      //TODO call api there
    }
  }, [parameters.uuid, getChat]);

  return <div>{chat === null ? <div>Loading...</div> : chat.prompt}</div>;
}
