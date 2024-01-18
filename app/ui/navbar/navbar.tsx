"use client";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? "close" : "menu";
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden sticky top-0">
      <nav
        className={`flex justify-end pt-4 pr-8 ${
          isOpen ? "bg-background" : ""
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={`icons/${icon}.svg`} alt="menu" width={45} height={45} />
        </button>
      </nav>
      <nav
        className={`px-8  bg-background absolute h-screen w-screen ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <Sidebar closeMenu={closeMenu} />
      </nav>
    </div>
  );
}
