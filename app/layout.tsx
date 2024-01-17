import React, { useState } from "react";
import type { Metadata } from "next";
import { inter, robotoMono, manrope } from "./ui/fonts";
import "./globals.css";
import Sidebar from "./ui/sidebar/sidebar";
import Navbar from "./ui/navbar/navbar";

export const metadata: Metadata = {
  title: "Rita Solà",
  description: "Portfolio de Rita Solà Canals",
};

const footerMessage = "Hecho con ♥️ por mi misma";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${manrope.className} antialiased flex flex-col min-h-screen bg-background`}
      >
        <Navbar />
        <div className="px-10 max-w-7xl md:px-20 self-center w-full">
          <div className="flex gap-20 ">
            <aside className="hidden md:flex w-1/5 pt-10 sticky top-0 h-screen">
              <Sidebar />
            </aside>
            <main className="flex flex-col w-4/5 flex-grow">
              <div className="md:pt-10">{children}</div>
              <footer className="flex justify-center items-center p-6">
                <p>{footerMessage}</p>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
