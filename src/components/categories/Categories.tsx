import {
  IMAGE_01,
  IMAGE_02,
  IMAGE_03,
} from "@/utils/assets/categories/categories";
import Link from "next/link";
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
        <Link
          href="/shop"
          className="rounded py-2 overflow-hidden flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow cursor-pointer"
        >
          <img
            src={IMAGE_01}
            alt="Image 1"
            className="lg:w-[375px] lg:h-[375px] w-[135px] h-[135px] rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Comedor
          </p>
        </Link>
        <Link
          href="/shop"
          className="rounded py-2 overflow-hidden flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow cursor-pointer"
        >
          <img
            src={IMAGE_02}
            alt="Image 2"
            className="lg:w-[375px] lg:h-[375px] w-[135px] h-[135px] rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Living
          </p>
        </Link>
        <Link
          href="/shop"
          className="rounded py-2 overflow-hidden flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105 hover:shadow cursor-pointer"
        >
          <img
            src={IMAGE_03}
            alt="Image 3"
            className="lg:w-[375px] lg:h-[375px] w-[135px] h-[135px] rounded-lg"
          />
          <p className="text-center text-lg lg:text-xl font-medium mt-4">
            Dormitorio
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
