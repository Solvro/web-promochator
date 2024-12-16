"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { Chat } from "@/types/chat";

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();

  const [chat, setChat] = useState<Chat | null>(null);

  useEffect(() => {
    const chats =
      localStorage.getItem("chats") == null
        ? []
        : (JSON.parse(localStorage.getItem("chats")!) as Chat[]);

    const foundChat = chats.find((c) => c.uuid === parameters.uuid);

    if (foundChat) {
      setChat(foundChat);
    } else {
      notFound();
    }
  }, [parameters.uuid]);

  if (!chat) {
    return <div>Loading...</div>;
  }

  return <div>{chat.prompt}</div>;
}
