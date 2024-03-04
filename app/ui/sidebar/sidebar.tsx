import NavLinks from "./nav-links";
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    name: "Linkedin",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/ritasola/",
  },
  {
    name: "Mail",
    href: "mailto:ritasolacanals@gmail.com",
    icon: "mail",
  },
];

export default function Sidenav({ closeMenu }: any) {
  return (
    <>
      <aside className="flex flex-col pb-4">
        <div className="flex items-center justify-center">
          <Image
            src="/images/rita_sola.jpeg"
            width={100}
            height={100}
            alt="Rita Solà"
            className="circleCrop md:w-30 md:h-30"
          />
        </div>
        <div className="flex justify-center items-center flex-col pt-6 pb-2">
          <h1 className="md:text-4xl text-3xl text-accent font-bold">
            Rita Solà
          </h1>
          <h2 className="md:text-base text-2xl text-body">
            FrontEnd developer
          </h2>
        </div>
        <div className="flex justify-center md:gap-6 gap-8 md:pb-14 pb-3 md:items-end">
          {icons.map((icon) => {
            return (
              <Link key={icon.name} href={icon.href} target="_blank">
                <Image
                  src={`/icons/${icon.icon}.svg`}
                  alt={icon.name}
                  width={45}
                  height={45}
                  className={"md:w-5"}
                />
              </Link>
            );
          })}
        </div>
        <div className="content-center">
          <NavLinks closeMenu={closeMenu} />
        </div>
      </aside>
    </>
  );
}
