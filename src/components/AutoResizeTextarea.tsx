"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

export interface AutoResizeTextAreaProps {
  id: string;
  placeholder: string;
  className?: string;
}

export function AutoResizeTextArea({
  id,
  placeholder,
  className,
}: AutoResizeTextAreaProps) {
  const [text, setText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustHeight();
  };

  return (
    <div className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
      <Textarea
        ref={textAreaRef}
        id={id}
        value={text}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
        rows={1}
      />
      <Button
        className="absolute right-2 top-1 size-7 rounded-full bg-sidebar"
        variant="transparent"
        size="icon"
        onClick={() => {
          setIsSubmitting(true);
          const newUuid = v4();
          //TODO adding conversation to localstorage there?
          router.push(`/chat/${newUuid}`);
        }}
        disabled={isSubmitting}
      >
        <ArrowUp size="20"></ArrowUp>
      </Button>
    </div>
  );
}
