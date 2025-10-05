import ArrowLink from "../arrow-link";

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
    <div className="flex flex-col bg-lightgray">
      <div
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="grow-1 p-6">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="my-3 leading-tight">{description}</p>
        <ArrowLink href={link} className="text-sm text-red">
          Détails
        </ArrowLink>
      </div>
    </div>
  );
}
