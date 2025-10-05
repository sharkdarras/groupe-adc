export default function BlockTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`${className} font-bold md:text-4xl text-3xl`}>
      {children}
    </h2>
  );
}
