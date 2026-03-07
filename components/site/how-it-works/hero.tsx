"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import kImage1 from "@/public/img/k-image-1.png";

const HowItWorksHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
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
      className="relative min-h-[80vh] flex flex-col justify-center items-center py-32 px-5 md:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 md:gap-10">
        <h1 className="hero-content text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-gudlak font-extrabold leading-tight">
          Comment fonctionne <br className="hidden sm:block" />
          <span className="text-secondary">Kailloux</span>
        </h1>

        <div className="hero-content text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto flex flex-col gap-6 leading-relaxed">
          <p className="font-medium">
            Kailloux simplifie la rencontre entre les talents et les
            opportunités.
          </p>
          <p>
            Grâce à une expérience claire et intuitive, les chercheurs d’emploi
            et les recruteurs peuvent se connecter rapidement et efficacement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHeroSection;
