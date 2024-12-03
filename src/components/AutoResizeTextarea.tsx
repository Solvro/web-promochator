"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { useAutoResizeTextArea } from "@/hooks/useAutoResizeTextArea";

export interface AutoResizeTextareaProps {
  id: string;
  placeholder: string;
  className?: string;
}

export function AutoResizeTextArea({
  id,
  placeholder,
  className,
}: AutoResizeTextareaProps) {
  const [text, setText] = useState<string>("");
  const textAreaRef = useAutoResizeTextArea();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(textAreaRef.current?.scrollHeight);
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
