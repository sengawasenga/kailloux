"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-40 pb-16 px-5 md:px-8 bg-neutral-50 border-b border-neutral-100"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-8">
        <h1 className="hero-item text-3xl sm:text-4xl md:text-5xl uppercase font-gudlak font-extrabold leading-tight">
          Contactez-<span className="text-primary">nous</span>
        </h1>
        <p className="hero-item text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Une question, une suggestion ou un partenariat ? Nous serions ravis
          d&apos;échanger avec vous.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
