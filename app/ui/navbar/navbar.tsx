"use client";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setMenu] = useState(false);
  const icon = isOpen ? "close" : "menu";

  return (
    <div className="md:hidden sticky top-0">
      <nav
        className={`flex justify-end pt-4 pr-8 ${
          isOpen ? "bg-background" : ""
        }`}
        // className={`flex justify-end pt-4 pr-8  w-full h-16 bg-gradient-to-b from-background via-transparent to-transparent transition-all duration-500 `}
      >
        <button onClick={() => setMenu(!isOpen)}>
          <Image src={`icons/${icon}.svg`} alt="menu" width={45} height={45} />
        </button>
      </nav>
      <nav
        className={`px-8  bg-background absolute h-screen w-screen ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <Sidebar onClick={() => setMenu(false)} />
      </nav>
    </div>
  );
}
