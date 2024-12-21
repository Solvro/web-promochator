import { ClientOnly } from "@/components/client-only";
import { SupervisorDetails } from "@/components/supervisor-details";

export default async function SupervisorPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  return (
    <div className="flex grow items-center justify-center">
      <ClientOnly className="flex w-full max-w-3xl flex-col gap-8 p-4">
        <SupervisorDetails uuid={uuid} />
      </ClientOnly>
    </div>
  );
}
