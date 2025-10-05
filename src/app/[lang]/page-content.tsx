export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper">
      <div className="wrapped">{children}</div>
    </div>
  );
}
