"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EditorProvider } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";

import { useChats } from "@/hooks/use-chats";
import type { Chat } from "@/types/chat";

import { Button } from "./ui/button";

const extensions = [StarterKit];

const formSchema = z.object({
  content: z.string().min(1, "test"),
});

export function PromptForm() {
  const router = useRouter();
  const { addChat } = useChats();
  const formRef = useRef<null | HTMLFormElement>(null);

  const {
    handleSubmit,
    setValue,
    register,
    getValues,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    const newUuid = v4();
    const chat: Chat = { uuid: newUuid, prompt: getValues("content") };
    addChat(chat);
    router.push(`/chat/${newUuid}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="flex w-full max-w-[350px] items-center gap-x-2 rounded-lg border-2 border-color-primary bg-chat-user px-2 align-top md:max-w-[400px] lg:max-w-[500px]"
    >
      <EditorProvider
        immediatelyRender={false}
        extensions={extensions}
        editorProps={{
          attributes: {
            class: "p-2 focus:outline-none cursor-text max-h-[200px]",
          },
          handleKeyDown: (_, event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              formRef.current?.requestSubmit();
              return true;
            }
          },
          ...register("content"),
        }}
        editorContainerProps={{
          className: "w-full overflow-y-auto",
        }}
        content={getValues("content")}
        onUpdate={({ editor }) => {
          setValue("content", editor.getText());
        }}
      />

      <Button
        variant="transparent"
        className="aspect-square size-8 rounded-full bg-chat-background"
        size="icon"
        type="submit"
        disabled={isSubmitting}
      >
        <ArrowUp size={20}></ArrowUp>
      </Button>
    </form>
  );
}
