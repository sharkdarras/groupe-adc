export default async function Mandats({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <div>Mandates {lang}</div>;
}
