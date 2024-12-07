"use client";
import { usePathname } from "next/navigation";

export default function ConversationPage() {
  const pathname = usePathname();
  const uuidRegex =
    /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/g;
  const uuid = pathname.match(uuidRegex)?.[0];
  return <div>UUID: {uuid}</div>;
}
