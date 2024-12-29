import { useAtom } from "jotai/react";
import { useCallback } from "react";

import { chatsAtom } from "@/atoms/chats";
import type { Chat } from "@/types/chat";

export function useChats() {
  const [chats, setChats] = useAtom(chatsAtom);

  const getChat = useCallback(
    (uuid: string) => {
      return chats.find((c) => c.uuid === uuid) ?? null;
    },
    [chats],
  );

  const addChat = useCallback(
    (newChat: Chat) => {
      setChats((previousChats) => [newChat, ...previousChats]);
    },
    [setChats],
  );

  const removeChat = useCallback(
    (uuid: string) => {
      setChats((previousChats) =>
        previousChats.filter((chat) => chat.uuid !== uuid),
      );
    },
    [setChats],
  );

  const updateChat = useCallback(
    (uuid: string, updatedChat: Partial<Chat>) => {
      setChats((previousChats) =>
        previousChats.map((chat) =>
          chat.uuid === uuid ? { ...chat, ...updatedChat } : chat,
        ),
      );
    },
    [setChats],
  );

  return {
    chats,
    getChat,
    addChat,
    removeChat,
    updateChat,
  };
}
