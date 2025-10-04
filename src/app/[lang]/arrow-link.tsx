import Link from "next/link";
import RightArrow from "@/icons/right-arrow";

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
      <RightArrow className="h-[1.2em] ml-[0.1em] group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  );
}
