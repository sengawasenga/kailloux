"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BlogsHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-40 pb-20 px-5 md:px-8 bg-neutral-50 border-b border-neutral-100"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-8">
        <h1 className="hero-content text-5xl sm:text-6xl md:text-7xl font-gudlak font-extrabold text-neutral-900 leading-tight">
          Notre <span className="text-primary">Blog</span>
        </h1>
        <p className="hero-content text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos dernières actualités, conseils carrières et décryptages
          du marché de l&apos;emploi.
        </p>
      </div>
    </section>
  );
};

export default BlogsHeroSection;
