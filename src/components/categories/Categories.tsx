import {
  IMAGE_01,
  IMAGE_02,
  IMAGE_03,
} from "@/utils/assets/categories/categories";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="bg-white w-full pt-8 px-4 lg:px-24">
      <h3 className="text-stone-700 text-2xl font-semibold text-center">
        Explora Nuestra Variedad de Iluminación
      </h3>
      <h4 className="text-stone-600 text-center text-lg mt-1">
        Descubre la perfecta iluminación para tu hogar.
      </h4>

      <div className="grid grid-cols-3 gap-4 my-5">
        <div className="rounded overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={IMAGE_01}
            alt="Imagen 1"
            width={350}
            height={350}
            className="rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Comedor
          </p>
        </div>
        <div className="rounded overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={IMAGE_02}
            alt="Imagen 2"
            width={350}
            height={350}
            className="rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Living
          </p>
        </div>
        <div className="rounded overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={IMAGE_03}
            alt="Imagen 3"
            width={350}
            height={350}
            className="rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Dormitorio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
