"use client";

import { notFound, useParams } from "next/navigation";

export default function ConversationPage({}) {
  const params = useParams<{ uuid: string }>();

  const chat = localStorage.getItem(params.uuid);

  if (!chat) {
    notFound();
  }

  return <div>{JSON.parse(chat).prompt}</div>;
}
