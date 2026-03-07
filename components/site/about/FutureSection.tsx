"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kImage4 from "@/public/img/k-image-4.png";

gsap.registerPlugin(ScrollTrigger);

const FutureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".reveal-image", {
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white min-h-[80vh] flex items-center">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
      >
        <div className="flex flex-col gap-8">
          <h2 className="reveal-text uppercase text-3xl sm:text-4xl md:text-5xl font-gudlak font-extrabold text-neutral-900 leading-tight">
            Construire l’avenir <br className="hidden sm:block" />
            <span className="text-primary">des opportunites</span>
          </h2>
          <div className="reveal-text flex flex-col gap-6 text-lg lg:text-xl text-neutral-600">
            <p>
              Nous développons Kailloux pour faciliter la connexion entre
              talents et recruteurs et contribuer à un écosystème professionnel
              plus ouvert et plus efficace.
            </p>
            <p>
              Au fil du temps, la plateforme continuera d’évoluer pour offrir de
              nouveaux outils et soutenir la croissance des entreprises et des
              professionnels.
            </p>
          </div>
        </div>

        <div className="reveal-image relative w-full aspect-square md:aspect-4/3 lg:aspect-square bg-blue-50 rounded-[3rem] overflow-hidden">
          <Image
            src={kImage4}
            alt="Construire l'avenir"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
