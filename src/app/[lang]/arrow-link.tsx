import Link from "next/link";

export default function ArrowLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} flex items-center gap-1 group font-light uppercase`}
    >
      {children}
      <img
        src="/assets/icons/right-arrow.svg"
        alt="Link arrow"
        className="h-[1.2em] group-hover:translate-x-1 transition-transform duration-200 "
      />
    </Link>
  );
}
