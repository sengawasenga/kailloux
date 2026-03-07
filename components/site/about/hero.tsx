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
      className="pt-40 pb-16 px-5 md:px-8 bg-neutral-50 border-b border-neutral-100"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 md:gap-12">
        <h1 className="hero-reveal uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gudlak font-extrabold leading-tight">
          A propos <span className="text-primary">de Kailloux</span>
        </h1>

        <div className="hero-reveal text-lg md:text-xl max-w-3xl mx-auto flex flex-col gap-4 leading-relaxed">
          <p className="">
            Kailloux est né d’une conviction simple : chaque talent mérite une
            opportunité.
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
