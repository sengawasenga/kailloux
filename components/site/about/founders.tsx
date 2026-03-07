"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

import kImage1 from "@/public/img/k-image-1.png";
import kImage2 from "@/public/img/k-image-2.png";
import kImage3 from "@/public/img/k-image-3.png";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Carmel Siki",
    role: "Co-fondateur",
    image: kImage2,
    bgColor: "bg-primary-dark",
    marginTop: "mt-0",
    socials: [
      { name: "LinkedIn", icon: "mdi:linkedin", url: "#" },
      { name: "X", icon: "streamline-logos:x-twitter-logo", url: "#" },
      { name: "Instagram", icon: "mdi:instagram", url: "#" },
    ],
  },
  {
    name: "Daniel Abutumange",
    role: "Co-fondateur",
    image: kImage1,
    bgColor: "bg-primary",
    marginTop: "mt-0 md:mt-[80px]",
    socials: [
      { name: "LinkedIn", icon: "mdi:linkedin", url: "#" },
      { name: "X", icon: "streamline-logos:x-twitter-logo", url: "#" },
      { name: "Instagram", icon: "mdi:instagram", url: "#" },
    ],
  },
  {
    name: "Marcel Senga",
    role: "Co-fondateur",
    image: kImage3,
    bgColor: "bg-secondary",
    marginTop: "mt-0 md:mt-[40px]",
    socials: [
      { name: "LinkedIn", icon: "mdi:linkedin", url: "#" },
      { name: "X", icon: "streamline-logos:x-twitter-logo", url: "#" },
      { name: "Instagram", icon: "mdi:instagram", url: "#" },
    ],
  },
];

const FoundersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-card", {
        y: 80,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 bg-neutral-50 border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-gudlak font-extrabold mb-6">
            L&apos;équipe derriere{" "}
            <span className="text-primary">Kailloux</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Trois fondateurs unis par la même passion : simplifier l&apos;accès
            à l&apos;emploi et créer des opportunités concrètes et
            bienveillantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className={`founder-card flex flex-col items-center group ${founder.marginTop}`}
            >
              {/* Image Pill like Hero */}
              <div
                className={`rounded-full h-[400px] md:h-[500px] w-full max-w-[320px] ${founder.bgColor} overflow-hidden relative mb-4 transition-transform duration-500 group-hover:-translate-y-4 shadow-sm group-hover:shadow-lg`}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="absolute left-1/2 bottom-0 object-cover"
                  draggable="false"
                />
              </div>

              {/* Founder Info */}
              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-primary font-medium text-lg mb-1">
                {founder.role}
              </p>

              {/* Socials */}
              <div className="flex gap-4">
                {founder.socials.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    className="w-9 h-9 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-[2px]"
                    aria-label={`${social.name} de ${founder.name}`}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
