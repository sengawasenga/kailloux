"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const types = [
  {
    title: "Pour les chercheurs d’emploi",
    description:
      "Découvrez des offres adaptées à vos compétences et accédez plus facilement à de nouvelles opportunités.",
    icon: "solar:user-rounded-linear", // Closest to user-search in linear
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Pour les recruteurs",
    description:
      "Publiez des offres et entrez rapidement en contact avec des candidats disponibles.",
    icon: "solar:briefcase-linear",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const TwoUserTypesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".type-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 bg-neutral-900 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16 text-white">
          <h2 className="text-4xl sm:text-5xl font-gudlak font-extrabold mb-6">
            Une plateforme pour tous.
          </h2>
          <p className="text-lg text-neutral-400">
            Que vous cherchiez ou que vous proposiez, Kailloux a été pensé pour
            vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {types.map((type, idx) => (
            <div
              key={idx}
              className={`type-card ${type.bgColor} rounded-[2rem] p-10 md:p-14 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div
                className={`w-24 h-24 rounded-full bg-white mb-8 flex items-center justify-center ${type.iconColor} shadow-sm border border-neutral-100`}
              >
                <Icon icon={type.icon} className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold font-gudlak text-neutral-900 mb-4">
                {type.title}
              </h3>
              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoUserTypesSection;
