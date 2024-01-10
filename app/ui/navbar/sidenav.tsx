import NavLinks from "./nav-links";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Sidenav() {
  return (
    <>
      <div className="pb-4">
        <div className="pb-6">
          <Image
            src="/rita_sola.jpeg"
            width={500}
            height={500}
            alt="Rita Solà"
            className="circleCrop"
          />
        </div>
        <h1 className="text-2xl">Rita Solà</h1>
        <h2 className="text-base">FrontEnd developer</h2>
        <Link href={"https://www.linkedin.com/in/ritasola/"} target="_blank">
          <FaLinkedin size={30} />
        </Link>
      </div>
      <NavLinks />
    </>
  );
}
