import Image from "next/image";

export default function CardIcons({ title, icons }: any) {
  return (
    <article className="max-w grow p-5  bg-background-200 border border-background-300 rounded-lg shadow">
      <h3 className="md:text-lg text-2xl text-primary font-semibold pb-6">
        {title}
      </h3>
      <div>
        <ul className="flex justify-center gap-8">
          {icons.map((icon: any, index: number) => (
            <li key={index}>
              <Image
                src={`icons/${icon.icon}.svg`}
                alt={icon.name}
                width={30}
                height={30}
                className="grayscale-filter"
                title={icon.name}
              ></Image>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
