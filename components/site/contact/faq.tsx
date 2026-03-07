"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqCategories = [
  {
    label: "Général",
    questions: [
      {
        question: "Comment fonctionne Kailloux ?",
        answer:
          "Kailloux est une plateforme qui connecte les talents aux recruteurs. Parcourez les offres, postulez en quelques clics ou publiez vos propres annonces.",
      },
      {
        question: "Est-ce gratuit ?",
        answer:
          "Oui, la recherche d'emploi et la consultation des offres sont entièrement gratuites sur Kailloux.",
      },
      {
        question: "Quels types de métiers sont proposés ?",
        answer:
          "Kailloux couvre tous les secteurs : services domestiques, beauté, transport, commerce, technologie, gestion et bien plus encore.",
      },
    ],
  },
  {
    label: "Recruteurs",
    questions: [
      {
        question: "Comment publier une offre d'emploi ?",
        answer:
          "Créez un compte recruteur, cliquez sur « Publier une offre » et remplissez les informations nécessaires. Votre annonce sera visible immédiatement.",
      },
      {
        question: "Combien coûte la publication d'une offre ?",
        answer:
          "La publication d'offres est disponible selon des formules adaptées à vos besoins. Contactez-nous pour en savoir plus.",
      },
    ],
  },
  {
    label: "Candidats",
    questions: [
      {
        question: "Comment postuler à une offre ?",
        answer:
          "Trouvez l'offre qui vous correspond, cliquez dessus pour consulter les détails puis utilisez le bouton de candidature pour postuler directement.",
      },
      {
        question: "Dois-je créer un compte pour postuler ?",
        answer:
          "Un compte vous permet de suivre vos candidatures et d'être notifié des nouvelles offres correspondant à votre profil.",
      },
    ],
  },
];

const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reset open item when switching category
  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory]);

  const currentCategory = faqCategories[activeCategory];

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 bg-neutral-50 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title + Category Tabs */}
        <div className="faq-reveal mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold text-neutral-900 mb-10">
            Questions fréquentes
          </h2>
          <div className="flex flex-wrap gap-3">
            {faqCategories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-3 rounded-full border text-sm font-bold transition-all duration-300 ${
                  activeCategory === idx
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Category Label + FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          {/* Left: Category Name */}
          <div className="faq-reveal">
            <h3 className="text-3xl sm:text-4xl font-gudlak font-extrabold text-neutral-900 sticky top-32">
              {currentCategory.label}
            </h3>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col">
            {currentCategory.questions.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="faq-reveal border-b border-neutral-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 py-8 text-left group"
                  >
                    <span className="text-lg md:text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 text-2xl font-light transition-all duration-300 ${
                        isOpen
                          ? "rotate-0 bg-neutral-900 text-white border-neutral-900"
                          : "rotate-0"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] pb-8" : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-600 text-lg leading-relaxed pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
