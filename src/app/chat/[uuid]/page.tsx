import { ClientConversation } from "./client";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  return <ClientConversation uuid={uuid} />;
}
