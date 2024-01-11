import type { Metadata } from "next";
import { inter, robotoMono } from "./ui/fonts";
import "./globals.css";
import Sidenav from "./ui/navbar/sidenav";

export const metadata: Metadata = {
  title: "Rita Solà",
  description: "Portfolio de Rita Solà Canals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${robotoMono.className} antialiased flex flex-col min-h-screen`}
      >
        <div className="px-20 pt-10">
          <div className="flex flex-1 gap-10">
            <div className="w-1/5">
              <Sidenav />
            </div>
            <div className="flex-1">{children}</div>
          </div>
          <footer className="flex justify-center items-center p-2">
            <p>Hecho con ♥️ por mi misma</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
