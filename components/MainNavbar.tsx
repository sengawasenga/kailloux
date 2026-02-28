"use client";

import Image from "next/image";
import logoImg from "@/public/img/kailloux-logo-dark.svg";
import Link from "next/link";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/a-propos" },
  { label: "Comment ça marche ?", href: "/comment-ca-marche" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const MainNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger bar refs
  const bar1 = useRef<HTMLSpanElement>(null);
  const bar2 = useRef<HTMLSpanElement>(null);
  const bar3 = useRef<HTMLSpanElement>(null);

  // Mobile menu ref
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animate hamburger on open/close
  useEffect(() => {
    if (isOpen) {
      // Animate to X — bars meet at center (container is 20px tall; top bar center at 1px → move +9px; bottom bar center at 19px → move -9px)
      gsap.to(bar1.current, {
        rotate: 45,
        y: 9,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(bar2.current, {
        opacity: 0,
        scaleX: 0,
        duration: 0.15,
        ease: "power2.inOut",
      });
      gsap.to(bar3.current, {
        rotate: -45,
        y: -9,
        duration: 0.35,
        ease: "power2.inOut",
      });

      // Animate menu in
      gsap.set(mobileMenuRef.current, { display: "flex" });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );

      // Stagger nav items
      const items = mobileMenuRef.current?.querySelectorAll("li");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.1,
          },
        );
      }
    } else {
      // Animate back to hamburger
      gsap.to(bar1.current, {
        rotate: 0,
        y: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(bar2.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(bar3.current, {
        rotate: 0,
        y: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });

      // Animate menu out
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop overlay for mobile */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm opacity-0 pointer-events-none lg:hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed left-0 top-0 w-full z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-4 mt-4 md:mt-6 rounded-full bg-white/80 backdrop-blur-md px-5 md:px-12">
          {/* Logo */}
          <div>
            <Image
              src={logoImg}
              alt="Logo"
              className="h-[36px] md:h-[40px] w-auto"
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navLinks.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li
                    key={href}
                    className="relative flex flex-col items-center"
                  >
                    <Link
                      href={href}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        active
                          ? "text-primary font-semibold"
                          : "text-foreground/65 hover:text-primary"
                      }`}
                    >
                      {label}
                    </Link>
                    {/* Bottom indicator dot for active page (desktop) */}
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 rounded-full bg-primary transition-all duration-300 ${
                        active ? "w-5 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
            <Button className="bg-primary text-white text-sm rounded-full">
              Commencer l&apos;aventure
            </Button>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {/* Fixed 20×20 container so GSAP y values are exact */}
            <span className="relative block w-5 h-5">
              <span
                ref={bar1}
                className="absolute left-0 top-0 w-5 h-0.5 bg-foreground rounded-full origin-center"
              />
              <span
                ref={bar2}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-foreground rounded-full origin-center"
              />
              <span
                ref={bar3}
                className="absolute left-0 bottom-0 w-5 h-0.5 bg-foreground rounded-full origin-center"
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden hidden flex-col mx-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl overflow-hidden border border-white/60"
        >
          <ul className="flex flex-col py-3 px-2">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                      active
                        ? "text-primary bg-primary/8"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {label}
                    {/* Right-side indicator dot for active page (mobile) */}
                    {active && (
                      <span className="shrink-0 w-2 h-2 rounded-full bg-primary ml-2" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-4 pb-4 pt-1">
            <Button className="bg-primary text-white w-full rounded-full text-sm">
              Commencer l&apos;aventure
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
