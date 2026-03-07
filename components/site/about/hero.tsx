"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] flex flex-col justify-center items-center py-32 px-5 md:px-8 bg-neutral-50"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 md:gap-12">
        <h1 className="hero-reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-gudlak font-extrabold text-neutral-900 leading-tight">
          A propos <br className="hidden sm:block" />
          <span className="text-primary">de Kailloux</span>
        </h1>

        <div className="hero-reveal text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto flex flex-col gap-6 leading-relaxed">
          <p className="font-medium text-neutral-800">
            Kailloux est né d’une conviction simple :<br />
            chaque talent mérite une opportunité.
          </p>
          <p>
            Notre mission est de rendre la recherche d’emploi plus simple, plus
            accessible et plus transparente, en connectant les talents aux
            opportunités réelles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
