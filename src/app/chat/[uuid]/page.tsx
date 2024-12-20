import { ClientOnly } from "@/components/client-only";
import { Conversation } from "@/components/conversation";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  return (
    <ClientOnly className="flex grow flex-col items-center justify-center overflow-y-auto">
      <Conversation uuid={uuid} />
    </ClientOnly>
  );
}
