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
export default function Sidenav() {
  return (
    <>
      <div className="pb-4">
        <div className="pb-6">
          <Image
            src="/images/rita_sola.jpeg"
            width={500}
            height={500}
            alt="Rita Solà"
            className="circleCrop"
          />
        </div>
        <h1 className="text-2xl">Rita Solà</h1>
        <h2 className="text-base">FrontEnd developer</h2>
        <div className="flex gap-2 pb-6 pt-2 items-end">
          {icons.map((icon) => {
            return (
              <Link key={icon.name} href={icon.href}>
                <Image
                  src={`/icons/${icon.icon}.svg`}
                  alt={icon.name}
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
        <NavLinks />
      </div>
    </>
  );
}
