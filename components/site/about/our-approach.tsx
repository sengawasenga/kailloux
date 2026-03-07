"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "solar:smartphone-update-linear",
    title: "Accessibilité",
    description:
      "Kailloux est conçu pour être simple et intuitif, afin que chacun puisse l’utiliser facilement.",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "Inclusivité",
    description:
      "La plateforme valorise tous les métiers, du travail local aux postes spécialisés.",
  },
  {
    icon: "solar:eye-linear",
    title: "Clarté",
    description:
      "Nous simplifions la découverte des opportunités grâce à une expérience moderne et fluide.",
  },
];

const OurApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow duration-300 items-center text-center"
            >
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-primary shadow-sm border border-neutral-100">
                <Icon icon={feature.icon} className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-gudlak text-neutral-800">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
