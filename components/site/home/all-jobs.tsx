"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    icon: "solar:home-smile-linear",
    title: "Services domestiques",
    description: "Ménage, garde d'enfants, aide à domicile...",
  },
  {
    icon: "solar:scissors-linear",
    title: "Beauté et coiffure",
    description: "Coiffure, esthétique, soins à domicile...",
  },
  {
    icon: "solar:box-minimalistic-linear",
    title: "Transport et logistique",
    description: "Chauffeur, livreur, manutention, transport...",
  },
  {
    icon: "solar:tag-price-linear",
    title: "Commerce et vente",
    description: "Vente en magasin, caisse, service client...",
  },
  {
    icon: "solar:monitor-smartphone-linear",
    title: "Technologie",
    description: "Support informatique, réparation, développement...",
  },
  {
    icon: "solar:clipboard-text-linear",
    title: "Gestion et administration",
    description: "Secrétariat, comptabilité, assistance administrative...",
  },
];

const AllJobsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".job-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".job-title-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="allJobsSection"
      className="py-24 bg-neutral-50 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="job-title-reveal text-center max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-gudlak font-extrabold mb-6">
            Chaque métier compte.
          </h2>
          <p className="text-lg text-neutral-600">
            Que vous soyez artisan, commerçant, technicien ou professionnel
            qualifié, Kailloux valorise toutes les compétences et rend chaque
            opportunité visible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="job-card bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-2">
                <Icon icon={job.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-gudlak text-neutral-800">
                {job.title}
              </h3>
              <p className="text-neutral-500">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobsSection;
