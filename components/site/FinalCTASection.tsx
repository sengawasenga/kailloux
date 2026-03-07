"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/react";

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale and fade in effect for CTA block
      gsap.from(".cta-content", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 w-full flex items-center justify-center min-h-[70vh] bg-white"
    >
      <div className="cta-content w-full max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center shadow-2xl overflow-hidden relative isolate">
        {/* Abstract shapes for contrast */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-white/10 blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] rounded-full bg-black/10 blur-3xl -z-10" />

        <div className="flex flex-col items-center gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-gudlak font-extrabold text-white leading-tight">
            Prêt à commencer ?
          </h2>

          <div className="flex flex-col gap-2 text-xl md:text-3xl text-white/90 font-medium">
            <p className="opacity-90">Le prochain travail.</p>
            <p className="opacity-95">Le prochain collaborateur.</p>
            <p className="font-bold text-white text-2xl md:text-4xl mt-2">
              La prochaine opportunité.
            </p>
            <p className="text-lg md:text-xl text-white/80 mt-6 max-w-xl mx-auto border-t border-white/20 pt-6">
              Tout commence ici.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto justify-center">
            <Button
              size="lg"
              className="bg-white text-primary font-bold rounded-full px-10 py-7 text-lg hover:scale-105 transform transition-transform duration-300 shadow-xl"
            >
              Trouver un travail
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white font-bold rounded-full px-10 py-7 text-lg hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
            >
              Publier une offre
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
