"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Placeholder } from "@tiptap/extension-placeholder";
import { EditorProvider } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";

import { useChats } from "@/hooks/use-chats";
import { useLastRequestTimestamp } from "@/hooks/use-last-request-timestamp";
import { faculties } from "@/lib/faculties";
import type { Chat } from "@/types/chat";

import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: "Wpisz temat lub opis swojej pracy...",
  }),
];

const formSchema = z.object({
  prompt: z.string().min(1),
  faculty: z.string(),
});

const LOCK_DURATION_SECONDS = Number(
  process.env.NEXT_PUBLIC_LOCK_DURATION_SECONDS ?? 60,
);

export function PromptForm() {
  const router = useRouter();
  const { addChat } = useChats();
  const formRef = useRef<null | HTMLFormElement>(null);

  const { getLastRequestTimestamp, setLastRequestTimestamp } =
    useLastRequestTimestamp();
  const [lockDuration, setLockDuration] = useState(0);

  useEffect(() => {
    const timestamp = getLastRequestTimestamp();

    if (timestamp === null) {
      return;
    }

    const delta = Math.floor((Date.now() - timestamp.getTime()) / 1000);

    if (delta > LOCK_DURATION_SECONDS) {
      return;
    }

    setLockDuration(LOCK_DURATION_SECONDS - delta);

    if (lockDuration <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setLockDuration((previousTimer) => {
        if (previousTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return previousTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [lockDuration, getLastRequestTimestamp]);

  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    const { prompt, faculty } = getValues();
    const uuid = v4();
    const chat: Chat = {
      uuid,
      prompt,
      faculty: faculty === "any" ? "" : faculty,
      createdAt: new Date(),
    };
    addChat(chat);
    setLastRequestTimestamp(new Date());
    router.push(`/chat/${uuid}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="flex w-full max-w-[350px] flex-col rounded-lg border-2 border-color-primary bg-chat-user p-2 md:max-w-[400px] lg:max-w-[500px]"
    >
      <div className="min-h-10">
        <EditorProvider
          immediatelyRender={false}
          extensions={extensions}
          editorProps={{
            attributes: {
              class: "pb-4 focus:outline-none cursor-text max-h-[200px]",
            },
            handleKeyDown: (_, event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                formRef.current?.requestSubmit();
                return true;
              }
            },
          }}
          editorContainerProps={{
            className: "w-full overflow-y-auto",
          }}
          content={getValues("prompt")}
          onUpdate={({ editor }) => {
            setValue("prompt", editor.getText());
          }}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <Controller
          name="faculty"
          control={control}
          defaultValue="any"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue="any"
            >
              <SelectTrigger className="max-w-48">
                <p className="truncate">
                  <SelectValue placeholder="Wybierz wydział" />
                </p>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Dowolny wydział</SelectItem>
                {Object.keys(faculties).map((faculty) => (
                  <SelectItem key={faculty} value={faculty}>
                    {faculties[faculty]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <div className="flex items-center gap-x-2">
          {lockDuration !== 0 && (
            <span className="text-sm">Odczekaj: {lockDuration}</span>
          )}
          <Button
            variant="transparent"
            className="aspect-square size-8 rounded-full bg-chat-background"
            size="icon"
            type="submit"
            disabled={isSubmitting || lockDuration !== 0}
          >
            <ArrowUp size={20}></ArrowUp>
          </Button>
        </div>
      </div>
    </form>
  );
}
