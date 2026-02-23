import { Button } from "@heroui/react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="heroSection"
      className="min-h-screen flex flex-col pt-[150px] md:pt-[200px] gap-10"
    >
      <div className="px-5 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h1 className="uppercase text-5xl md:text-6xl">
              The magic devs you&apos;ve been searching for
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nulla accusamus nostrum enim dignissimos, consequuntur non magnam
              officiis a incidunt.
            </p>
            <Button size="lg" className="bg-primary rounded-full text-white ">
              Commencer !
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] w-full overflow-hidden flex justify-center">
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative"></div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary-dark overflow-hidden relative mt-[150px]"></div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-secondary overflow-hidden relative mt-[50px]"></div>
        <div className="rounded-full h-[450px] md:h-[600px] lg:h-[700px] min-w-[280px] sm:min-w-[350px] w-full bg-primary overflow-hidden relative mt-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;
