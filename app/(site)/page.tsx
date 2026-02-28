import Hero from "@/components/site/home/hero";
import TheProblemSection from "@/components/site/home/the-problem";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans">
      <main className="">
        <Hero />
        <TheProblemSection />
      </main>
    </div>
  );
}
