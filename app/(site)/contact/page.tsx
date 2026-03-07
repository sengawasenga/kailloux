import { Metadata } from "next";
import ContactHeroSection from "@/components/site/contact/hero";
import ContactFormSection from "@/components/site/contact/contact-form";
import FAQSection from "@/components/site/contact/faq";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Vous avez une question ou une proposition ? Notre équipe est à votre écoute.",
};

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
