export default function Block({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`py-16 md:py-20 px-8 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
