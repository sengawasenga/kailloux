import Hero from "@/components/site/home/hero";
import TheProblemSection from "@/components/site/home/the-problem";
import TheSolutionSection from "@/components/site/home/the-solution";
import AllJobsSection from "@/components/site/home/all-jobs";
import HowItWorksSection from "@/components/site/home/how-it-works";
import RecruitersSection from "@/components/site/home/recruiters";
import VisionSection from "@/components/site/home/vision";
import FinalCTASection from "@/components/site/FinalCTASection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <main className="">
        <Hero />
        <TheProblemSection />
        <TheSolutionSection />
        <AllJobsSection />
        <HowItWorksSection />
        <RecruitersSection />
        {/* <VisionSection /> */}
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
