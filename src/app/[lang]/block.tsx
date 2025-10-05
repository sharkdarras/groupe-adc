export default function Block({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className} py-20 px-12`}>{children}</div>;
}
