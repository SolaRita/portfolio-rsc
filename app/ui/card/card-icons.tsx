import Image from "next/image";
import { Icon } from "../../interfaces/Icon";

interface CardIcon {
  title: string;
  icons: Icon[];
}

export default function CardIcons({ title, icons }: CardIcon) {
  return (
    <article className="max-w grow p-5  bg-background-200 border border-background-300 rounded-lg shadow">
      <h3 className="md:text-lg text-2xl text-primary font-semibold pb-6">
        {title}
      </h3>
      <div>
        <ul className="flex justify-center gap-8 flex-wrap">
          {icons.map((icon: Icon, index: number) => (
            <li key={index} className="flex flex-col items-center text-center">
              <Image
                src={`icons/${icon.icon}.svg`}
                alt={icon.name}
                className="grayscale-filter md:w-8"
                title={icon.name}
                width={45}
                height={45}
              ></Image>
              <p className="md:hidden block justify-self-center">{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
