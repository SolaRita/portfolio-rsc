"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  {
    name: "About",
    href: "/",
    icon: "face",
  },
  {
    name: "Formacion",
    href: "/studies",
    icon: "book",
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
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base flex items-center gap-2 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start
                ${pathname === link.href ? "bg-sky-100 text-blue-600" : ""}`}
          >
            <Image
              src={`/icons/${link.icon}.svg`}
              alt={link.name}
              width={20}
              height={20}
            />

            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
