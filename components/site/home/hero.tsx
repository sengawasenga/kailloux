import { Button } from "@heroui/react";
import kImage1 from "@/public/img/k-image-1.png";
import kImage2 from "@/public/img/k-image-2.png";
import kImage3 from "@/public/img/k-image-3.png";
import kImage4 from "@/public/img/k-image-4.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="heroSection"
      className="min-h-screen flex flex-col pt-[150px] md:pt-[200px] gap-10"
    >
      <div className="px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h1 className="uppercase text-5xl md:text-6xl lg:text-7xl font-gudlak font-extrabold">
              Ici, on trouve du travail.
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg lg:text-2xl">
              Kailloux est une plateforme inclusive qui connecte les talents aux
              recruteurs, quel que soit le métier. Une expérience claire, rapide
              et intuitive pour transformer une recherche en opportunité
              concrète.
            </p>
            <Button size="lg" className="bg-primary rounded-full text-white ">
              Commencer l&apos;aventure !
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] w-full overflow-hidden flex justify-center">
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative">
          <Image
            src={kImage1}
            alt="k-image-1"
            fill
            className="absolute left-1/2 bottom-0 object-cover"
            draggable="false"
          />
        </div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary-dark overflow-hidden relative mt-[150px]">
          <Image
            src={kImage2}
            alt="k-image-2"
            fill
            className="absolute left-1/2 bottom-0 object-cover"
            draggable="false"
          />
        </div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-secondary overflow-hidden relative mt-[50px]">
          <Image
            src={kImage3}
            alt="k-image-3"
            fill
            className="absolute left-1/2 bottom-0 object-cover"
            draggable="false"
          />
        </div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative mt-[100px]">
          <Image
            src={kImage4}
            alt="k-image-4"
            fill
            className="absolute left-1/2 bottom-0 object-cover"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
