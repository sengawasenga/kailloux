"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const pulse = pulseRef.current;
    if (!overlay || !logo || !pulse) return;

    // Pulse animation on the logo while loading
    const pulseTl = gsap.timeline({ repeat: -1, yoyo: true });
    pulseTl.to(logo, {
      scale: 1.06,
      duration: 1,
      ease: "power1.inOut",
    });

    // Pulse glow behind logo
    const glowTl = gsap.timeline({ repeat: -1, yoyo: true });
    glowTl.to(pulse, {
      scale: 1.3,
      opacity: 0.08,
      duration: 1.5,
      ease: "power1.inOut",
    });

    const dismissLoader = () => {
      // Stop looping animations
      pulseTl.kill();
      glowTl.kill();

      // Exit timeline: slide the entire overlay upward
      const exitTl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove("loading-active");
          setRemoved(true);
        },
      });

      // First shrink logo slightly
      exitTl.to(logo, {
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      // Then slide the overlay up and out
      exitTl.to(overlay, {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      });
    };

    const handleLoad = () => {
      // Small delay so the animation feels intentional
      setTimeout(dismissLoader, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (removed) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-primary will-change-transform"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse glow */}
        <div
          ref={pulseRef}
          className="absolute w-[220px] h-[220px] rounded-full bg-white/20 blur-3xl pointer-events-none"
        />

        {/* Logo */}
        <div ref={logoRef} className="relative z-10">
          <Image
            src="/img/kailloux-logo-light.svg"
            alt="Kailloux Logo"
            width={180}
            height={60}
            priority
            className="h-auto w-auto select-none"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
