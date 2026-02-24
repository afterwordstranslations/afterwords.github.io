import Image from "next/image";
type TranslatorProps = {
  fullName: string;
  shortName: string;
  imageSrc: string;
  href: string;
  description: string;
};
export default function Translator(props: TranslatorProps) {
  return (
    <div className="rounded mb-8 grid gap-4 grid-cols-4">
      <figure className="col-span-1">
        <Image
          src={props.imageSrc}
          alt={props.fullName}
          width={100}
          height={100}
          className="rounded-badge w-full"
        />
      </figure>
      <div className="col-span-3 block px-4">
        <h3 className="card-title text-2xl mb-4">{props.fullName}</h3>
        <p className="mb-4 text-base">{props.description}</p>
        <p className="text-base mb-2">Find {props.shortName} on </p>
        <a href={props.href} className="btn btn-accent px-4" target="_blank">
          <Image
            src="/LI-Logo.png"
            alt="LinkedIn logo"
            width={80}
            height={80}
          />
        </a>
      </div>
    </div>
  );
}
