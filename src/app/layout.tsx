import type { Metadata } from "next";
// import { Titillium_Web } from "@next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100",
});
const lato = localFont({
  src: "/fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "400",
});

// // Importing Lato Bold
// const latoBold = localFont({
//   src: "/fonts/Lato-Bold.ttf",
//   variable: "--font-lato-bold",
//   weight: "700",
// });

const titilliumWeb = localFont({
  src: "/fonts/Titillium-Light.otf",
  variable: "--font-titillium",
  weight: "400",
});
const titilliumSemi = localFont({
  src: "/fonts/Titillium-Semibold.otf",
  variable: "--font-titillium-semi",
  weight: "600",
});
const titilliuBold = localFont({
  src: "/fonts/Titillium-Bold.otf",
  variable: "--font-titillium-bold",
  weight: "600",
});
// const titilliumWeb = localFont({
//   src: "/fonts/Titillium-Light.otf",
//   variable: "--font-titillium",
//   weight: "400",
// });

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Innovative Machinery",
  description: "Innovative Machinery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} ${titilliumSemi.variable} ${titilliuBold.variable} ${lato.variable}  bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
