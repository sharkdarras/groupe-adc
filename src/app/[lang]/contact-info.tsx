export default function ContactInfo({
  iconSrc,
  info,
  href,
}: {
  iconSrc: string;
  info: string;
  href: string;
}) {
  return (
    <div className="flex justify-start items-center">
      <div className="bg-white rounded-full p-2 md:p-3 mr-2 md:mr-4">
        <img src={iconSrc} alt={info} className="h-4 md:h-6" />
      </div>
      <a className="text-white text-xl md:text-3xl" href={href}>
        {info}
      </a>
    </div>
  );
}
