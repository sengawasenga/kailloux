"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import logoLight from "@/public/kailloux-logo-light.svg";
import logoDark from "@/public/kailloux-logo-dark.svg";
import { useEffect, useState } from "react";
import LiquidEther from "@/components/ui/LiquidEther";

// Color variants of #409EBC
const liquidColors = [
	"#409EBC", // Base color
	"#6EC4E0", // Lighter variant
	"#2E7A9A", // Darker variant
	"#40BCA0", // Complementary teal-green
];

export default function Home() {
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Use resolvedTheme to handle system theme preference
	const currentTheme = resolvedTheme || theme;
	const logo = currentTheme === "dark" ? logoLight : logoDark;

	return (
		<div className="relative min-h-screen w-full font-sans overflow-hidden">
			<div className="fixed inset-0 w-screen h-screen z-0">
				<LiquidEther
					colors={liquidColors}
					className="w-full h-full"
					autoDemo={true}
					autoSpeed={0.5}
					resolution={0.5}
				/>
			</div>
			<main className="relative z-10 flex min-h-screen w-full items-center justify-center py-32 px-16">
				<div className="flex flex-col items-center gap-6 text-center max-w-3xl w-full">
					{mounted && (
						<Image src={logo} alt="Logo Kailloux" className="h-10 w-auto" />
					)}
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight tracking-tight text-black dark:text-zinc-50">
						Site en construction
					</h1>
					<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
						Nous travaillons actuellement sur ce site. Revenez bientôt pour
						découvrir notre nouveau contenu.
					</p>
				</div>
			</main>
		</div>
	);
}
