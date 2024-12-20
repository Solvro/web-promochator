export default async function Page({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  //TODO
  return <div>Saved supervisor there {uuid}</div>;
}
