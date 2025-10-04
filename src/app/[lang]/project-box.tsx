import ArrowLink from "./arrow-link";

export default function ProjectBox({
  link,
  name,
  description,
  imageSrc,
}: {
  link: string;
  name: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col border-2 border-darkgray">
      <div
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="border-2 border-white grow-1 p-4">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="my-2 leading-tight">{description}</p>
        <ArrowLink href={link} className="text-white text-sm">
          Détails
        </ArrowLink>
      </div>
    </div>
  );
}
