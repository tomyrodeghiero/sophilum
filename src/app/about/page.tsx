import Features from "@/components/features/Features";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import { ABOUT_01, ABOUT_02 } from "@/utils/assets/about/about";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Nosotros"
        subtitle="Inicio - Nosotros"
      />

      <div className="flex flex-col text-black p-4 lg:py-16 lg:px-40">
        <h1 className="text-2xl font-medium lg:text-3xl lg:text-center mb-3">
          Nuestra Historia en Sophilum
        </h1>
        <h2 className="text-xl font-medium lg:text-[1.2rem] lg:text-center mb-5">
          Desde Río Cuarto, Córdoba, llevando luz a Argentina.
        </h2>
        <p className="text-sm lg:text-base mb-5">
          Desde 2019, en el corazón de{" "}
          <span className="font-medium">Río Cuarto, Córdoba 🇦🇷</span>
          &nbsp;Sophilum se ha convertido en un nombre sinónimo de innovación y
          calidad en el mundo de la iluminación. Lo que empezó como un sueño ha
          iluminado miles de hogares y proyectos en todo el país.
        </p>
        <h3 className="text-xl mt-5 mb-3 lg:text-2xl">
          El inicio de Sophilum: Una chispa que se convirtió en llama 💡
        </h3>
        <img
          className="object-contain w-full md:w-3/4 mx-auto rounded-lg mb-5"
          src={ABOUT_01}
          alt="Inicios de Sophilum"
        />
        <p className="text-sm lg:text-base mb-5">
          Todo comenzó con una simple idea: llevar productos de iluminación de
          calidad a los hogares de Río Cuarto. Pronto, esa idea se convirtió en
          una misión, y esa misión en un legado. Trabajamos con pasión,
          dedicando horas a la investigación, diseño y perfección de cada
          producto.
        </p>
        <div className="ml-4 mb-5">
          <li>Asesoramiento profesional para cada cliente.</li>
          <li>Proyectos de iluminación personalizados.</li>
        </div>
        <h3 className="text-xl mt-5 mb-3 lg:text-2xl">
          Sophilum Hoy: Iluminando el Futuro 💫
        </h3>
        <img
          className="object-contain w-full md:w-3/4 mx-auto rounded-lg mb-5"
          src={ABOUT_02}
          alt="Sophilum en la Actualidad"
        />
        <p className="text-sm lg:text-base mb-5">
          Con más de 315 publicaciones y una comunidad creciente de 13.7 mil
          seguidores, Sophilum no es solo una tienda, es una familia. Estamos
          orgullosos de lo que hemos construido y estamos emocionados por lo que
          vendrá. Gracias por formar parte de nuestro viaje iluminado.
        </p>
      </div>

      <Features />
    </div>
  );
};

export default AboutPage;
