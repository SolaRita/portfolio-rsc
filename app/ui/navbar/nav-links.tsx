"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";

const links = [
  {
    name: "About",
    href: "/",
    icon: IoPersonCircleOutline,
  },
  {
    name: "Formacion",
    href: "/studies",
    icon: MdOutlineCollectionsBookmark,
  },
  {
    name: "Experiencia Dev",
    href: "/dev-jobs",
    icon: RiCodeView,
  },
  {
    name: "Otros trabajos",
    href: "/other-jobs",
    icon: GoBriefcase,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base flex items-center gap-2 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start
                ${pathname === link.href ? "bg-sky-100 text-blue-600" : ""}`}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
