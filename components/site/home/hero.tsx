"use client";

import { useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import { gsap } from "gsap";
import kImage1 from "@/public/img/k-image-1.png";
import kImage2 from "@/public/img/k-image-2.png";
import kImage3 from "@/public/img/k-image-3.png";
import kImage4 from "@/public/img/k-image-4.png";
import Image from "next/image";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Title entrance
      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
      });

      // Description + button entrance
      tl.from(
        ".hero-desc",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6",
      );

      // Image pills stagger from bottom
      tl.from(
        ".hero-pill",
        {
          y: 120,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          stagger: 0.15,
        },
        "-=0.4",
      );

      // Hover effects for each pill
      const pills = gsap.utils.toArray<HTMLElement>(".hero-pill");
      pills.forEach((pill) => {
        const img = pill.querySelector("img");

        pill.addEventListener("mouseenter", () => {
          gsap.to(pill, {
            y: -16,
            scale: 1.03,
            boxShadow: "0 25px 60px -12px rgba(0,0,0,0.25)",
            duration: 0.4,
            ease: "power2.out",
          });
          if (img) {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        });

        pill.addEventListener("mouseleave", () => {
          gsap.to(pill, {
            y: 0,
            scale: 1,
            boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
            duration: 0.4,
            ease: "power2.out",
          });
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="heroSection"
      className="min-h-screen flex flex-col pt-[150px] md:pt-[200px] gap-10"
    >
      <div className="px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="overflow-hidden">
            <h1 className="hero-title uppercase text-5xl md:text-6xl lg:text-7xl font-gudlak font-extrabold">
              Ici, on trouve du travail.
            </h1>
          </div>
          <div className="hero-desc flex flex-col gap-6">
            <p className="text-lg lg:text-2xl">
              Kailloux est une plateforme inclusive qui connecte les talents aux
              recruteurs, quel que soit le métier. Une expérience claire, rapide
              et intuitive pour transformer une recherche en opportunité
              concrète.
            </p>
            <Button size="lg" className="bg-primary rounded-full text-white ">
              Commencer l&apos;aventure !
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] w-full overflow-hidden flex justify-center">
        <div className="hero-pill rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative cursor-pointer">
          <Image
            src={kImage1}
            alt="k-image-1"
            fill
            className="absolute left-1/2 bottom-0 object-cover transition-transform duration-500"
            draggable="false"
          />
        </div>
        <div className="hero-pill rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary-dark overflow-hidden relative mt-[150px] cursor-pointer">
          <Image
            src={kImage2}
            alt="k-image-2"
            fill
            className="absolute left-1/2 bottom-0 object-cover transition-transform duration-500"
            draggable="false"
          />
        </div>
        <div className="hero-pill rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-secondary overflow-hidden relative mt-[50px] cursor-pointer">
          <Image
            src={kImage3}
            alt="k-image-3"
            fill
            className="absolute left-1/2 bottom-0 object-cover transition-transform duration-500"
            draggable="false"
          />
        </div>
        <div className="hero-pill rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative mt-[100px] cursor-pointer">
          <Image
            src={kImage4}
            alt="k-image-4"
            fill
            className="absolute left-1/2 bottom-0 object-cover transition-transform duration-500"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
