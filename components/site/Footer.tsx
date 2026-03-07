import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logoLight from "@/public/img/kailloux-logo-light.svg"; // Assuming dark background for footer, so light logo

const Footer = () => {
  return (
    <footer className="bg-primary-dark pt-20 pb-8 px-5 md:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src={logoLight}
                alt="Kailloux Logo"
                width={150}
                height={40}
                className="select-none"
              />
            </Link>
            <p className="text-sm md:text-base leading-relaxed">
              Kailloux connecte les talents aux opportunités, du service local
              aux postes spécialisés.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-gudlak font-bold text-xl uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche"
                  className="hover:text-white transition-colors duration-200"
                >
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Trouver un travail
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Publier une offre
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Entreprise */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-gudlak font-bold text-xl uppercase tracking-wider">
              Entreprise
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-white transition-colors duration-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-gudlak font-bold text-xl uppercase tracking-wider">
              Suivez-nous
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-[2px] shadow-md text-neutral-300"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="w-5 h-5" />{" "}
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-[2px] shadow-md text-neutral-300"
                aria-label="Facebook"
              >
                <Icon icon="fa:facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-[2px] shadow-md text-neutral-300"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-[2px] shadow-md text-neutral-300"
                aria-label="TikTok"
              >
                <Icon icon="ic:baseline-tiktok" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© Kailloux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
