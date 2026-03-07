"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle fade and scale up
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center py-32 px-5 md:px-8 bg-neutral-50"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 md:gap-12"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gudlak font-extrabold text-neutral-900 leading-tight">
          Valoriser le travail, <br className="hidden sm:block" />
          <span className="text-primary">connecter les ambitions.</span>
        </h2>

        <div className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto flex flex-col gap-6 leading-relaxed">
          <p>
            Kailloux est conçu pour créer un espace où chaque compétence peut
            rencontrer une opportunité réelle.
          </p>
          <p>
            Notre ambition est de rendre l’accès au travail plus simple, plus
            transparent et plus inclusif pour tous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
