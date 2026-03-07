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
    title: "Chercher du travail ne devrait pas etre complique.",
    description:
      "Pourtant, pour des milliers de personnes, la recherche d'emploi est un parcours semé d'embûches. Les offres sont dispersées, difficiles à trouver et souvent peu claires.",
    image: problemCard1,
    bg: "primary-dark",
    color: "white",
  },
  {
    title: "Beaucoup d'opportunites restent invisibles.",
    description:
      "De nombreuses offres d'emploi existent, mais restent difficiles à trouver. Elles circulent de manière informelle ou disparaissent avant même d'être vues.",
    image: problemCard1,
    bg: "primary",
    color: "white",
  },
  {
    title: "Un grand nombre de talents ne trouvent pas leur place.",
    description:
      "Des milliers de personnes sont prêtes à travailler. Le manque de visibilité et d'outils accessibles freine leur accès aux opportunités.",
    image: problemCard2,
    bg: "secondary",
    color: "foreground",
  },
  {
    title: "Le marche manque de clarte.",
    description:
      "Entre le bouche-à-oreille, les annonces dispersées et les plateformes complexes, la recherche d'emploi devient confuse et décourageante.",
    image: problemCard3,
    bg: "primary-dark",
    color: "white",
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
      className="relative overflow-hidden pb-16 pt-32 mt-12"
    >
      {/* Section title — visible before horizontal scroll starts */}
      {/* <div
        ref={titleRef}
        className="flex flex-col items-center justify-center min-h-[40vh] px-5 md:px-8 pt-20 pb-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold text-center max-w-5xl leading-tight">
          Chercher du travail ne devrait pas être compliqué.
        </h2>
      </div> */}

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex items-stretch gap-6 md:gap-8 will-change-transform pl-[7.5vw]"
        style={{ width: "fit-content" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`problem-card relative shrink-0 rounded-[85px] md:rounded-[100px] overflow-hidden bg-${card.bg} text-${card.color}`}
            style={{
              width: "80vw",
              height: "90vh",
              minHeight: "500px",
              maxHeight: "750px",
            }}
          >
            {/* Card content */}
            <div className="card-content absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl">
                <h3
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gudlak font-bold text-${card.color} leading-tight mb-4 md:mb-6 uppercase`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-${card.color}/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl`}
                >
                  {card.description}
                </p>
              </div>
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
