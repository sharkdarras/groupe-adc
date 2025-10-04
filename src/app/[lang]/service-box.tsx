export default function ServiceBox({
  description,
  iconSrc,
}: {
  description: string;
  iconSrc: string;
}) {
  return (
    <div className="flex flex-col md:items-center border-2 border-darkgray md:p-12 p-8">
      <img
        src={iconSrc}
        alt={description}
        className="md:w-16 md:h-16 w-12 h-12 mb-4"
      />
      <div className="md:text-lg font-medium md:text-center grow-1 flex items-center justify-center">
        {description}
      </div>
    </div>
  );
}
