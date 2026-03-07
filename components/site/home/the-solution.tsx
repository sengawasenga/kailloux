"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import kImage1 from "@/public/img/k-image-1.png";

gsap.registerPlugin(ScrollTrigger);

const TheSolutionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="theSolutionSection"
      className="min-h-screen py-24 flex items-center"
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <div className="flex flex-col gap-8">
          <h2 className="reveal-element text-3xl sm:text-4xl md:text-5xl font-gudlak font-extrabold leading-tight uppercase">
            Une nouvelle facon de decouvrir les opportunites.
          </h2>
          <div className="reveal-element flex flex-col gap-6 text-lg lg:text-xl text-neutral-700">
            <p>
              Avec Kailloux, explorez les offres d’emploi comme vous parcourez
              votre fil d’actualité. Un simple défilement, des informations
              claires et une candidature rapide.
            </p>
            <p>
              La plateforme est pensée pour être intuitive, accessible et
              ouverte à tous les métiers, afin que chaque talent puisse trouver
              sa place.
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-line-duotone"
                  className="w-8 h-8 text-primary"
                />
                <span>Simple et intuitif</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:magic-stick-3-line-duotone"
                  className="w-8 h-8 text-primary"
                />
                <span>Accessible à tous</span>
              </li>
            </ul>
          </div>
          <div className="reveal-element mt-4">
            <Button
              size="lg"
              className="bg-primary rounded-full text-white text-lg px-8 py-6"
            >
              Découvrir la plateforme
            </Button>
          </div>
        </div>

        <div className="reveal-element relative w-full aspect-square md:aspect-4/3 lg:aspect-square bg-blue-100 rounded-[3rem] overflow-hidden">
          <Image
            src={kImage1}
            alt="Kailloux app illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TheSolutionSection;
