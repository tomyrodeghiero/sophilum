import { ARROW_RIGHT, FACEBOOK, INSTAGRAM } from "@/utils/assets/icons/icons";
import React from "react";

// import next/link
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400">
      <div className="mx-24 border-b border-gray-400 flex justify-between py-10">
        <div>
          <h2 className="font-semibold text-2xl mb-8">Sophilum.</h2>

          <div className="flex flex-col gap-1 text-gray-500">
            <p>Cólon 248</p>
            <p>Río Cuarto, Córdoba</p>
            <p className="uppercase">Argentina</p>
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-8">Enlaces</p>
          <div className="flex flex-col gap-8">
            <Link href="/">Inicio</Link>
            <Link href="/shop">Tienda</Link>
            <Link href="/about">Nosotros</Link>
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-8">Ayuda</p>
          <div className="flex flex-col gap-8">
            <Link href="/">Contacto</Link>
            <Link href="/shop">Términos y Condiciones</Link>
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-8 border-b border-black">
            Últimas Novedades y Ofertas Exclusivas
          </p>
          <div className="flex gap-4 justify-end">
            <Link href="/">
              <img className="hover-lift h-5" src={FACEBOOK} alt="Icon 2" />
            </Link>
            <Link href="/shop">
              <img className="hover-lift h-5" src={INSTAGRAM} alt="Icon 2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-24 my-5">
        <div className=" text-center md:text-left mb-6 md:mb-0 order-2 md:order-1">
          <p className="text-center md:text-left mb-6 md:mb-0 order-2 md:order-1">
            <span className="font-medium cursor-default">
              © 2019 - 2023 Sophilum, Iluminación Creativa.
            </span>
            &nbsp; Todos los derechos reservados.
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
