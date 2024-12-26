"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useChats } from "@/hooks/use-chats";

import { Recommendation } from "./recommendation";

export function Conversation({ uuid }: { uuid: string }) {
  const { getChat, updateChat } = useChats();
  const chat = getChat(uuid);
  const router = useRouter();

  useEffect(() => {
    if (chat === null) {
      router.replace("/chat");
    }
  }, [chat, router]);

  return chat === null ? null : (
    <div className="flex flex-col">
      <div className="ml-auto mr-8 flex w-3/4 justify-end md:w-1/2">
        <p className="rounded-2xl bg-chat-user px-4 py-3">{chat.prompt}</p>
      </div>
      <Recommendation chat={chat} updateChat={updateChat}></Recommendation>
    </div>
  );
}
