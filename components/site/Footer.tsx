import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logoLight from "@/public/img/kailloux-logo-light.svg"; // Assuming dark background for footer, so light logo

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-8 px-5 md:px-8 text-neutral-400">
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
                  href="/trouver-un-travail"
                  className="hover:text-white transition-colors duration-200"
                >
                  Trouver un travail
                </Link>
              </li>
              <li>
                <Link
                  href="/publier-une-offre"
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
            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md text-neutral-300"
                aria-label="LinkedIn"
              >
                <Icon icon="solar:link-linear" className="w-6 h-6" />{" "}
                {/* Temporary icon if linkedin missing */}
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md text-neutral-300"
                aria-label="Facebook"
              >
                <Icon icon="solar:link-linear" className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md text-neutral-300"
                aria-label="Instagram"
              >
                <Icon icon="solar:link-linear" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© Kailloux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
