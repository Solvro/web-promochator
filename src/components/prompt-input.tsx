"use client";

import { EditorProvider } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 } from "uuid";

import { useChats } from "@/hooks/use-chats";
import type { Chat } from "@/types/chat";

import { Button } from "./ui/button";

const extensions = [StarterKit];

export function PromptInput() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const router = useRouter();
  const { addChat } = useChats();

  return (
    <div className="flex w-full max-w-[350px] items-center gap-x-2 rounded-lg border-2 border-color-primary bg-chat-user px-2 align-top md:max-w-[400px] lg:max-w-[500px]">
      <EditorProvider
        immediatelyRender={false}
        extensions={extensions}
        editorProps={{
          attributes: {
            class: "p-2 focus:outline-none cursor-text max-h-[200px]",
          },
        }}
        editorContainerProps={{
          className: "w-full overflow-y-auto",
        }}
        content={prompt}
        onUpdate={({ editor }) => {
          setPrompt(editor.getText());
        }}
      ></EditorProvider>

      <Button
        variant="transparent"
        className="aspect-square size-8 rounded-full bg-chat-background"
        size="icon"
        onClick={() => {
          setIsSubmitting(true);
          const newUuid = v4();
          const chat: Chat = { uuid: newUuid, prompt, recommendation: [] };
          addChat(chat);
          router.push(`/chat/${newUuid}`);
        }}
        disabled={isSubmitting}
      >
        <ArrowUp size={20}></ArrowUp>
      </Button>
    </div>
  );
}
