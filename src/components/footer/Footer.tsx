import { ARROW, FACEBOOK, INSTAGRAM } from "@/utils/assets/icons/icons";
import React from "react";
import Link from "next/link";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/utils/constants/constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400">
      <div className="mx-4 md:mx-24 border-b border-gray-400 flex flex-col md:flex-row justify-between py-10">
        <div className="mb-8 md:mb-0">
          <h2 className="font-semibold text-2xl mb-8">Sophilum.</h2>

          <div className="flex flex-col gap-1 text-gray-500">
            <p>Cólon 248</p>
            <p>Río Cuarto, Córdoba</p>
            <p className="uppercase">Argentina</p>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 lg:justify-evenly gap-8 lg:flex">
          <div className="w-1/2 md:w-auto">
            <p className="text-gray-500 mb-8">Enlaces</p>
            <div className="flex flex-col gap-8">
              <Link href="/">
                <span className="navlink">Inicio</span>
              </Link>
              <Link href="/shop">
                <span className="navlink">Tienda</span>
              </Link>
            </div>
          </div>

          <div className="w-1/2 md:w-auto mb-8 md:mb-0">
            <p className="text-gray-500 mb-8">Ayuda</p>
            <div className="flex flex-col gap-8">
              <Link href="/contact">
                <span className="navlink">Contacto</span>
              </Link>
              <Link href="/terms-of-service">
                <span className="navlink">Términos y Condiciones</span>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Link
            href="/shop"
            className="flex mt-8 lg:mt-0 justify-between mb-8 border-b border-black pb-2 gap-8 items-center"
          >
            <p className="text-gray-500">
              Últimas Novedades y Ofertas Exclusivas
            </p>

            <img className="h-2" src={ARROW} alt="Icon 2" />
          </Link>
          <div className="flex gap-4 justify-center md:justify-end">
            <Link href={FACEBOOK_URL}>
              <img className="hover-lift h-5" src={FACEBOOK} alt="Icon 2" />
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank">
              <img className="hover-lift h-5" src={INSTAGRAM} alt="Icon 2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-24 my-5">
        <div className="mb-8">
          <p className="inline-flex flex-col md:flex-row items-start md:items-center">
            <span className="font-medium cursor-default">
              © 2019 - 2024 Sophilum, Iluminación Creativa.
            </span>
            <span className="md:ml-2 mt-2 md:mt-0">
              Todos los derechos reservados.
            </span>
          </p>
        </div>

        <p className="flex items-center justify-center mt-5 gap-2 text-center text-gray-700">
          Desarrollado por
          <span className="font-medium">💻 Tomás Rodeghiero.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
