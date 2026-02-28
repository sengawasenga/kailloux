"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import problemCard1 from "@/public/img/problem-card-1.png";
import problemCard2 from "@/public/img/problem-card-2.png";
import problemCard3 from "@/public/img/problem-card-3.png";
import problemCard4 from "@/public/img/problem-card-4.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Trop d'opportunités restent invisibles.",
    description:
      "De nombreuses offres d'emploi existent, mais restent difficiles à trouver. Elles circulent de manière informelle ou disparaissent avant même d'être vues.",
    image: problemCard1,
    accent: "#409ebc",
  },
  {
    title: "Trop de talents ne trouvent pas leur place.",
    description:
      "Des milliers de personnes sont prêtes à travailler. Le manque de visibilité et d'outils accessibles freine leur accès aux opportunités.",
    image: problemCard2,
    accent: "#093f5c",
  },
  {
    title: "Le marché manque de clarté.",
    description:
      "Entre le bouche-à-oreille, les annonces dispersées et les plateformes complexes, la recherche d'emploi devient confuse et décourageante.",
    image: problemCard3,
    accent: "#f7c313",
  },
  {
    title: "Kailloux simplifie la rencontre.",
    description:
      "Nous créons un espace clair et fluide où les offres et les talents se connectent naturellement, sans barrière technique ni complexité inutile.",
    image: problemCard4,
    accent: "#409ebc",
  },
];

const TheProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Calculate horizontal scroll distance
    const getScrollDistance = () => {
      return track.scrollWidth - window.innerWidth;
    };

    // Title fade + scale animation on scroll into section
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    titleTl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, ease: "power2.out" },
    );

    // Horizontal scroll
    const horizontalScroll = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Card entrance animations
    const cardElements = track.querySelectorAll(".problem-card");
    cardElements.forEach((card) => {
      gsap.fromTo(
        card.querySelector(".card-content"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalScroll,
            start: "left 80%",
            end: "left 40%",
            scrub: 1,
          },
        },
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="theProblemSection"
      className="relative overflow-hidden"
    >
      {/* Section title — visible before horizontal scroll starts */}
      <div
        ref={titleRef}
        className="flex flex-col items-center justify-center min-h-[40vh] px-5 md:px-8 pt-20 pb-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold text-center max-w-5xl leading-tight">
          Chercher du travail ne devrait pas être compliqué.
        </h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex items-stretch gap-6 md:gap-8 will-change-transform pl-[7.5vw]"
        style={{ width: "fit-content" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="problem-card relative shrink-0 rounded-3xl overflow-hidden"
            style={{
              width: "85vw",
              height: "58vh",
              minHeight: "450px",
              maxHeight: "700px",
            }}
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              draggable="false"
              sizes="85vw"
              priority={index === 0}
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20" />

            {/* Card content */}
            <div className="card-content absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              {/* Card number */}
              <span className="text-white/20 font-gudlak text-7xl md:text-8xl lg:text-9xl font-extrabold absolute top-6 right-8 md:top-10 md:right-12 select-none">
                0{index + 1}
              </span>

              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gudlak font-bold text-white leading-tight mb-4 md:mb-6">
                  {card.title}
                </h3>
                <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="mt-8 h-1 w-16 md:w-24 rounded-full"
                style={{ backgroundColor: card.accent }}
              />
            </div>
          </div>
        ))}

        {/* Spacer at the end for clean unpin */}
        <div className="shrink-0" style={{ width: "15vw" }} />
      </div>
    </section>
  );
};

export default TheProblemSection;
