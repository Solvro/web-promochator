"use client";

import { notFound, useParams } from "next/navigation";

interface Chat {
  prompt: string;
}

export default function ConversationPage() {
  const parameters = useParams<{ uuid: string }>();

  if (localStorage.getItem(parameters.uuid) === null) {
    notFound();
  }

  const chat = JSON.parse(localStorage.getItem(parameters.uuid)!) as Chat;

  return <div>{chat.prompt}</div>;
}
