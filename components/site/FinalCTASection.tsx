"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import img1 from "@/public/img/k-image-1.png";
import img2 from "@/public/img/k-image-2.png";
import img3 from "@/public/img/k-image-3.png";
import img4 from "@/public/img/k-image-4.png";
import pc1 from "@/public/img/problem-card-1.png";
import pc2 from "@/public/img/problem-card-2.png";
import pc3 from "@/public/img/problem-card-3.png";
import pc4 from "@/public/img/problem-card-4.png";

gsap.registerPlugin(ScrollTrigger);

const marqueeImages = [img1, img2, img3, img4, pc1, pc2, pc3, pc4];

const FinalCTASection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for text
      gsap.from(".cta-text-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Infinite marquee animation
      if (marqueeRef.current) {
        const marqueeContent =
          marqueeRef.current.querySelector(".marquee-content");
        if (marqueeContent) {
          gsap.to(marqueeContent, {
            xPercent: -50,
            repeat: -1,
            duration: 120,
            ease: "none",
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-5 md:px-8 w-full flex flex-col items-center bg-white overflow-hidden"
    >
      {/* Text Content */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-8 mb-24">
        <h2 className="cta-text-reveal uppercase font-gudlak text-5xl md:text-7xl font-bold leading-tight">
          Connectons <span className="italic font-light">tous</span> les talents
        </h2>

        <p className="cta-text-reveal text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
          Rejoignez la communauté Kailloux pour donner de la visibilité à vos
          compétences ou trouver les meilleurs profils près de chez vous.
        </p>

        <div className="cta-text-reveal mt-4">
          <Button
            size="lg"
            className="bg-secondary text-neutral-900 font-bold rounded-full px-10 py-8 text-lg hover:scale-105 transition-all group shadow-sm"
          >
            Commencez maintenant
            <div className="ml-3 w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </div>

      {/* Image Marquee */}
      <div ref={marqueeRef} className="w-full relative py-10">
        <div className="marquee-content flex gap-8 w-fit">
          {/* First set */}
          {marqueeImages.map((img, i) => (
            <div
              key={`marquee-1-${i}`}
              className={`relative w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-sm shrink-0 ${i % 2 === 0 ? "" : "mt-24"}`}
            >
              <Image
                src={img}
                alt="Kailloux Talent"
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeImages.map((img, i) => (
            <div
              key={`marquee-2-${i}`}
              className={`relative w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-sm shrink-0 ${i % 2 === 0 ? "" : "mt-24"}`}
            >
              <Image
                src={img}
                alt="Kailloux Talent"
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
