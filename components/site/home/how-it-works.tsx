"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: "solar:magnifer-linear",
    title: "Explorez",
    description:
      "Parcourez les offres grâce à une interface fluide et intuitive.",
  },
  {
    number: "02",
    icon: "solar:document-add-linear",
    title: "Postulez ou publiez",
    description:
      "Envoyez votre candidature ou créez une annonce en quelques clics.",
  },
  {
    number: "03",
    icon: "solar:users-group-two-rounded-linear",
    title: "Connectez-vous",
    description:
      "Entrez en contact et transformez l’opportunité en collaboration.",
  },
];

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepCards = gsap.utils.toArray(".step-card");
      const lineProgress = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Simple stagger for step cards appearance
      gsap.from(stepCards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      lineProgress.fromTo(
        ".progress-line",
        { height: "0%" },
        { height: "100%", ease: "none" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-5 md:px-8 bg-white min-h-[80vh] flex flex-col justify-center">
      <div ref={containerRef} className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16 md:mb-24 reveal-title">
          <h2 className="text-4xl sm:text-5xl font-gudlak font-extrabold mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trois étapes simples pour transformer vos recherches en rencontres
            professionnelles réussies.
          </p>
        </div>

        <div className="relative isolate px-[2vw]">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-10 top-10 bottom-10 w-1 bg-neutral-200 -z-10 rounded-full">
            <div className="progress-line w-full bg-primary rounded-full drop-shadow-md" />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="step-card flex gap-6 md:gap-10 items-start"
              >
                {/* Step indicator */}
                <div className="relative shrink-0 w-12 h-12 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg z-10">
                  <span className="font-gudlak font-bold text-xl md:text-2xl pt-1">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="bg-neutral-50 rounded-3xl p-6 md:p-8 flex-1 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100 text-primary">
                      <Icon icon={step.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-gudlak font-bold text-neutral-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
