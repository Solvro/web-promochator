import { useCallback } from "react";

import type { Chat } from "@/types/chat";

import { useLocalStorageState } from "./use-local-storage";

export function useChats() {
  const [chats, setChats] = useLocalStorageState<Chat[]>("chats", []);

  const getChat = useCallback(
    (uuid: string) => {
      return chats.find((c) => c.uuid === uuid) ?? null;
    },
    [chats],
  );

  const addChat = useCallback(
    (newChat: Chat) => {
      setChats((previousChats) => [...previousChats, newChat]);
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
