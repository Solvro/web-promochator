import { atomWithStorage } from "jotai/utils";

import type { Chat } from "@/types/chat";

export const chatsAtom = atomWithStorage<Chat[]>("chats", []);
