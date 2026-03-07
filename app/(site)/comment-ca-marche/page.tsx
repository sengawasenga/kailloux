import { Metadata } from "next";
import HowItWorksHeroSection from "@/components/site/how-it-works/hero";
import UserFlowSection from "@/components/site/how-it-works/user-flow";
import TwoUserTypesSection from "@/components/site/how-it-works/two-user-types";
import BenefitsSection from "@/components/site/how-it-works/benefits";
import FinalCTASection from "@/components/site/FinalCTASection";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Apprenez comment utiliser Kailloux pour trouver un emploi ou recruter les meilleurs talents près de chez vous.",
};

const HowItWorksPage = () => {
  return (
    <div className="relative min-h-screen w-full">
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
