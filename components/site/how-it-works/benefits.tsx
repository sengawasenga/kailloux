"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Simplicité",
    description:
      "Une interface claire et intuitive qui rend la recherche d’emploi accessible à tous.",
    icon: "solar:magic-stick-3-linear",
  },
  {
    title: "Rapidité",
    description: "Publiez une offre ou postulez en seulement quelques étapes.",
    icon: "solar:rocket-linear",
  },
  {
    title: "Visibilité",
    description:
      "Les talents et les opportunités deviennent plus faciles à découvrir.",
    icon: "solar:eye-linear",
  },
  {
    title: "Connexion",
    description: "Facilitez les échanges entre recruteurs et candidats.",
    icon: "solar:chat-round-line-linear",
  },
];

const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-5 md:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-gudlak font-extrabold mb-6 text-neutral-900">
            Pourquoi choisir <span className="text-primary">Kailloux</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Découvrez nos principaux avantages pour accélérer votre expérience
            professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary mb-2 border border-neutral-100">
                <Icon icon={benefit.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
