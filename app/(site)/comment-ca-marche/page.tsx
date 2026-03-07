import HowItWorksHeroSection from "@/components/site/how-it-works/hero";
import UserFlowSection from "@/components/site/how-it-works/user-flow";
import TwoUserTypesSection from "@/components/site/how-it-works/two-user-types";
import BenefitsSection from "@/components/site/how-it-works/benefits";
import FinalCTASection from "@/components/site/FinalCTASection";
import Footer from "@/components/site/Footer";

const HowItWorksPage = () => {
  return (
    <div className="relative min-h-screen w-full font-sans">
      <main>
        <HowItWorksHeroSection />
        <UserFlowSection />
        {/* <TwoUserTypesSection /> */}
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
