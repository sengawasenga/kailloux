import ContactHeroSection from "@/components/site/contact/hero";
import ContactFormSection from "@/components/site/contact/contact-form";
import FAQSection from "@/components/site/contact/faq";
import Footer from "@/components/site/Footer";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full font-sans">
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
