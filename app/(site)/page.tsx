
export default function Home() {

	return (
		<div className="relative min-h-screen w-full font-sans overflow-hidden">
			<main className="relative z-10 flex min-h-screen w-full items-center justify-center py-32 px-16">
				<div className="flex flex-col items-center gap-6 text-center max-w-3xl w-full">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-thin leading-tight tracking-tight">
						Site en construction
					</h1>
					<p className="max-w-md text-lg leading-8 font-light">
						Nous travaillons actuellement sur ce site. Revenez bientôt pour
						découvrir notre nouveau contenu.
					</p>
				</div>
			</main>
		</div>
	);
}
