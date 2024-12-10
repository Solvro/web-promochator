"use client";

import { notFound, useParams } from "next/navigation";

export default function ConversationPage({}) {
  /*
  const pathname = usePathname(); // pathname = /chat/{uuid}
  TODO load chat from local storage using uuid, if not found -> 404
  */

  const params = useParams<{ uuid: string }>();

  const chat = localStorage.getItem(params.uuid);

  if (!chat) {
    notFound();
  }

  return <div>{params.uuid}</div>;
}
