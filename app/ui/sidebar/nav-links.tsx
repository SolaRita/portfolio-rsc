"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { basename } from "path";

const links = [
  {
    name: "Sobre mi",
    href: "/",
    icon: "face",
  },
  {
    name: "Experiencia Dev",
    href: "/dev-jobs",
    icon: "code",
  },
  {
    name: "Otros trabajos",
    href: "/other-jobs",
    icon: "work",
  },
  {
    name: "Formación",
    href: "/studies",
    icon: "book",
  },
];

export default function NavLinks({ closeMenu }: any) {
  const pathname = usePathname();
  const haveToClose = () => {
    if (window.innerWidth <= 768) {
      closeMenu(false);
    }
  };
  return (
    <>
      <ul className="gap-1">
        {links.map((link) => {
          return (
            <li key={link.name} className="md:my-2 my-6">
              <Link
                key={link.name}
                href={link.href}
                className={`text-base flex items-center gap-2 font-medium hover:text-primary-soft md:flex-none md:justify-start
            ${pathname === link.href ? "text-primary" : ""}`}
                onClick={haveToClose}
              >
                <Image
                  src={`/icons/${link.icon}.svg`}
                  alt={link.name}
                  width={45}
                  height={45}
                  className="md:w-5"
                />
                <p className={"md:text-sm text-2xl"}>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
