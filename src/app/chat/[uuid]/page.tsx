import { ClientOnly } from "@/components/client-only";
import { Conversation } from "@/components/conversation";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  return (
    <ClientOnly>
      <Conversation uuid={uuid} />
    </ClientOnly>
  );
}
