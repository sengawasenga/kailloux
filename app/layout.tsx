import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import MainNavbar from "@/components/MainNavbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

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
  title: {
    default: "Kailloux — La plateforme pour tous les talents",
    template: "%s | Kailloux",
  },
  description:
    "Kailloux connecte les talents congolais à toutes les opportunités — du quartier au bureau. Créez votre profil, découvrez des offres près de chez vous et commencez à travailler dès aujourd’hui.",
  keywords: [
    "emploi",
    "recrutement",
    "Congo",
    "RDC",
    "talents",
    "jobs",
    "opportunités",
    "travail",
    "Kinshasa",
  ],
  authors: [{ name: "Kailloux Team" }],
  creator: "Kailloux",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://kailloux.com/",
    siteName: "Kailloux",
    title: "Kailloux — La plateforme pour tous les talents",
    description:
      "Connectez les talents aux opportunités réelles. Que vous soyez chercheur d'emploi ou recruteur, Kailloux simplifie votre rencontre.",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kailloux - Ici on trouve du travail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kailloux — La plateforme pour tous les talents",
    description: "Connectez les talents aux opportunités réelles.",
    images: ["/img/og-image.png"],
    creator: "@Kailloux",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <SmoothScroll />
        <LoadingScreen />
        <div>{children}</div>
      </body>
    </html>
  );
}
