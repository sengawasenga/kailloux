import AboutHeroSection from "@/components/site/about/hero";
import OurApproachSection from "@/components/site/about/our-approach";
import OurVisionSection from "@/components/site/about/our-vision";
import FutureSection from "@/components/site/about/FutureSection";
import FoundersSection from "@/components/site/about/founders";
import FinalCTASection from "@/components/site/FinalCTASection";
import Footer from "@/components/site/Footer";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen w-full font-sans">
      <main className="pt-20">
        <AboutHeroSection />
        <OurApproachSection />
        <OurVisionSection />
        <FutureSection />
        <FoundersSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
