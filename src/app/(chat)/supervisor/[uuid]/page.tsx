export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  //TODO if chat is removed from local storage then display info about this instead of link to the chat
  return <div>Saved supervisor there {uuid}</div>;
}
