import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import MainNavbar from "@/components/MainNavbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const gudlak = localFont({
  variable: "--font-gudlak",
  src: [
    {
      path: "../public/fonts/gudlak/Gudlak-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gudlak/Gudlak-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Kailloux",
  description:
    "Kailloux connecte les talents congolais à toutes les opportunités — du quartier au bureau. Crée ton profil, découvre des offres près de toi et commence à travailler dès aujourd’hui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${quicksand.className} ${gudlak.variable} font-light antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Analytics />
        <MainNavbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
