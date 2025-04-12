import ArrowLink from "./arrow-link";

export default function CompanyHighlightBox({
  description,
  value,
  linkLabel,
  linkHref,
  className,
}: {
  description: string;
  value: string;
  linkLabel: string;
  linkHref: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} px-6 py-4 flex flex-col-reverse sm:flex-row sm:items-center justify-between`}
    >
      <div>
        <div className="font-medium mb-1 sm:text-lg leading-tight sm:w-52">
          {description}
        </div>
        <ArrowLink href={linkHref} className="text-sm">
          {linkLabel}
        </ArrowLink>
      </div>
      <div className="font-bold text-4xl sm:text-5xl mb-2 sm:mb-0 sm:ml-4">
        {value}
      </div>
    </div>
  );
}
