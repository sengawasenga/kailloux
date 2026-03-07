"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const ContactFormSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section ref={containerRef} className="py-24 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
        {/* Contact Info Column */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="form-reveal">
            <h2 className="text-3xl sm:text-4xl font-gudlak font-extrabold text-neutral-900 mb-4">
              Restons en contact
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              N&apos;hésitez pas à nous écrire. Notre équipe vous répondra dans
              les plus brefs délais.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="form-reveal flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon icon="solar:letter-linear" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">
                  Email
                </h3>
                <p className="text-neutral-600">contact@kailloux.com</p>
              </div>
            </div>

            <div className="form-reveal flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon icon="solar:phone-linear" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">
                  Téléphone
                </h3>
                <p className="text-neutral-600">+243 000 000 000</p>
              </div>
            </div>

            <div className="form-reveal flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon icon="solar:map-point-linear" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">
                  Adresse
                </h3>
                <p className="text-neutral-600">
                  Kinshasa, République Démocratique du Congo
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="form-reveal">
            <h3 className="font-bold text-neutral-900 text-lg mb-4">
              Suivez-nous
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Icon icon="solar:link-linear" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Icon icon="solar:share-linear" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Icon icon="solar:camera-linear" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="form-reveal bg-neutral-50 rounded-3xl border border-neutral-100 p-8 md:p-12 shadow-sm flex flex-col gap-6"
          >
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-5 flex items-center gap-3 font-medium">
                <Icon
                  icon="solar:check-circle-linear"
                  className="w-6 h-6 text-green-600 shrink-0"
                />
                Votre message a été envoyé avec succès !
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
              >
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="De quoi souhaitez-vous parler ?"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder="Votre message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold text-lg py-5 rounded-xl hover:opacity-90 transition-opacity mt-2 flex items-center justify-center gap-3 shadow-sm"
            >
              <Icon icon="solar:letter-linear" className="w-5 h-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
