"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/react";
import kImage3 from "@/public/img/k-image-3.png";

gsap.registerPlugin(ScrollTrigger);

const RecruitersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide-in for image from left
      gsap.from(".slide-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Slide-in for text from right
      gsap.from(".slide-right", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
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
    <section className="py-24 bg-neutral-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
      >
        <div className="slide-left relative w-full aspect-4/3 lg:aspect-square bg-secondary rounded-[3rem] overflow-hidden order-last lg:order-first">
          <Image
            src={kImage3}
            alt="Recrutez avec Kailloux"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="slide-right text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold leading-tight">
            Recrutez autrement.
          </h2>
          <div className="slide-right flex flex-col gap-6 text-lg lg:text-xl text-neutral-300">
            <p>
              Entreprises, commerçants ou particuliers peuvent publier leurs
              offres et toucher rapidement des candidats réellement disponibles.
            </p>
            <p>
              Kailloux simplifie la mise en relation pour rendre le recrutement
              plus rapide, plus clair et plus accessible.
            </p>
          </div>
          <div className="slide-right mt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 font-bold rounded-full text-lg px-8 py-6 hover:bg-neutral-100 transition-colors"
            >
              Publier une offre
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
