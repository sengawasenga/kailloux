"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurVisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
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
      className="relative min-h-[70vh] flex items-center justify-center py-32 px-5 md:px-8 bg-primary-dark text-white overflow-hidden"
    >
      {/* Subtle Background Gradient Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 md:gap-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-gudlak font-extrabold leading-tight">
          Notre <span className="text-secondary">vision</span>
        </h2>

        <div className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto flex flex-col gap-6 leading-relaxed">
          <p className="font-medium text-white">
            Nous croyons qu’un accès plus simple aux opportunités peut
            transformer des parcours de vie.
          </p>
          <p>
            Kailloux aspire à devenir un espace où les talents et les
            opportunités se rencontrent naturellement, contribuant ainsi à un
            marché du travail plus dynamique et plus accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;
