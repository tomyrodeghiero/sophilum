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
          Acerca de Nuestra Historia
        </h1>
        <h2 className="text-xl font-medium lg:text-[1.2rem] lg:text-center mb-5">
          ¿Quiénes somos y por qué hacemos lo que hacemos?
        </h2>
        <p className="text-sm lg:text-base mb-5">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
        <h3 className="text-xl mt-5 mb-3 lg:text-2xl">
          ¿Cómo comenzó Sophilum? 💡 🤔
        </h3>
        <img
          className="object-contain w-full md:w-3/4 mx-auto rounded-lg mb-5"
          src={ABOUT_01}
          alt="About 01"
        />
        <p className="text-sm lg:text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
        <div className="ml-4 mb-5">
          <li>Consectetur adipiscing elit. Aliquam placerat.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </div>
        <h3 className="text-xl mt-5 mb-3 lg:text-2xl">En la Actualidad 💫</h3>
        <img
          className="object-contain w-full md:w-3/4 mx-auto rounded-lg mb-5"
          src={ABOUT_02}
          alt="About 02"
        />
        <p className="text-sm lg:text-base mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie yeah text.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
