import React from "react";
import GoToShopButton from "../buttons/GoToShopButton";
import { Ellipse } from "./ellipse/Ellipse";
import {
  GALLERY_01,
  GALLERY_02,
  GALLERY_03,
  GALLERY_04,
} from "@/utils/assets/gallery/gallery";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-orange-200 pt-16 flex flex-col items-center relative overflow-hidden">
      <h1 className="text-green-900 font-medium text-6xl">
        Iluminación Creativa y Profesional
      </h1>
      <h2 className="my-4 text-xl text-green-900">
        Ilumina tu obra o proyecto con nuestro equipo de ascesores especialistas
        en iluminación.
      </h2>
      <GoToShopButton />

      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Ellipse />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 my-10 w-full relative">
          <Image src={GALLERY_01} alt="Image 1" width={350} height={350} />
          <Image src={GALLERY_02} alt="Image 2" width={350} height={350} />
          <Image src={GALLERY_03} alt="Image 3" width={350} height={350} />
          <Image src={GALLERY_04} alt="Image 4" width={350} height={350} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Ellipse />
        </div>
        <div className="absolute top-0 left-0 right-0 h-16 bg-orange-200 z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-orange-200 z-20" />
      </div>
    </div>
  );
};

export default Hero;
