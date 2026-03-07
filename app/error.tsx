"use client";

import { MaterialSymbolsAsteriskRounded } from "@/components/icons";
import Link from "next/link";

const Error = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Giant 500 background text */}
      <span
        className="absolute text-[30vw] md:text-[35vw] font-gudlak font-extrabold text-neutral-100 select-none pointer-events-none leading-none tracking-tighter"
        aria-hidden="true"
      >
        500
      </span>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        {/* Asterisk icon */}
        <span className="text-foreground mb-6 select-none">
          <MaterialSymbolsAsteriskRounded className="text-6xl md:text-7xl" />
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold text-neutral-900 mb-4">
          Oups ! Une erreur s&apos;est produite.
        </h1>

        <p className="text-neutral-500 text-base md:text-lg mb-10 leading-relaxed">
          Nous sommes désolés, mais une erreur s&apos;est produite. Veuillez
          réessayer plus tard.
        </p>

        <Link
          href="/"
          className="bg-neutral-900 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-neutral-800 transition-colors shadow-sm"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;
