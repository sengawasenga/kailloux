"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kImage1 from "@/public/img/k-image-1.png";
import kImage2 from "@/public/img/k-image-2.png";
import kImage3 from "@/public/img/k-image-3.png";
import kImage4 from "@/public/img/k-image-4.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Explorez les opportunités",
    description:
      "Parcourez les offres d’emploi à travers une expérience fluide qui vous permet de découvrir facilement de nouvelles opportunités.",
    image: kImage1,
    bgColor: "bg-primary/10",
  },
  {
    title: "Consultez les détails",
    description:
      "Chaque offre présente les informations essentielles : missions, localisation, exigences et modalités de contact.",
    image: kImage2,
    bgColor: "bg-secondary/10",
  },
  {
    title: "Postulez rapidement",
    description:
      "Envoyez votre candidature ou prenez contact avec le recruteur directement depuis la plateforme.",
    image: kImage3,
    bgColor: "bg-primary/10",
  },
  {
    title: "Créez des opportunités",
    description:
      "Pour les recruteurs, publier une offre permet de rendre une opportunité visible et d’atteindre rapidement des candidats disponibles.",
    image: kImage4,
    bgColor: "bg-secondary/10",
  },
];

const UserFlowSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray<HTMLElement>(".flow-step");

      stepElements.forEach((step, index) => {
        const text = step.querySelector(".step-text");
        const image = step.querySelector(".step-image");
        const isEven = index % 2 === 0;

        // Slide from left/right + fade
        gsap.fromTo(
          text,
          { x: isEven ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Slow fade up for image
        gsap.fromTo(
          image,
          { y: 50, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
      {steps.map((step, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={idx}
            className="flow-step min-h-screen flex items-center justify-center py-20 px-5 md:px-8 border-b border-neutral-100 last:border-b-0"
          >
            <div
              className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`step-text flex flex-col gap-6 lg:max-w-lg ${!isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold font-gudlak text-xl shrink-0">
                    {idx + 1}
                  </span>
                  <div className="h-[2px] w-12 bg-primary/20" />
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-gudlak font-bold text-neutral-900 leading-tight">
                  {step.title}
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div
                className={`step-image relative w-full aspect-square md:aspect-4/3 lg:aspect-square ${step.bgColor} rounded-[3rem] overflow-hidden ${!isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default UserFlowSection;
