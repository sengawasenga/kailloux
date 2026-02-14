import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
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
				className={`${geistSans.className} font-light antialiased bg-background text-foreground overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
