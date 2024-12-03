"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { useAutoResizeTextArea } from "@/hooks/useAutoResizeTextArea";

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
    <Textarea
      ref={textAreaRef}
      id={id}
      value={text}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      rows={1}
    />
  );
}
