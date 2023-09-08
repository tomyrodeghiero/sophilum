import HeaderBackground from "@/components/header-background/HeaderBackground";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Términos y Condiciones"
        subtitle="Inicio - Términos y Condiciones"
      />

      <div className="flex flex-col text-black p-4 lg:py-16 lg:px-40">
        <h1 className="text-2xl font-medium lg:text-3xl lg:text-center mb-5">
          Garantías de Nuestros Productos
        </h1>
        <p className="text-sm mt-2 lg:text-base mb-5">
          En Sophilum, creemos firmemente en la calidad y durabilidad de
          nuestros productos. Es por eso que todos nuestros artículos de
          iluminación pasan por rigurosos controles de calidad antes de llegar a
          tus manos. Ofrecemos una garantía extendida para cada producto,
          asegurando su correcto funcionamiento y su resistencia al paso del
          tiempo.
        </p>

        <h3 className="text-xl mt-6 lg:text-2xl mb-3">Seguridad</h3>
        <p className="text-sm lg:text-base mb-5">
          La seguridad de nuestros clientes es primordial. Cada uno de nuestros
          productos cumple con las normativas y estándares internacionales de
          seguridad en iluminación. Estamos comprometidos con brindarte
          soluciones de iluminación seguras y eficientes. Además, al comprar con
          nosotros, garantizas que tu información personal y bancaria se maneja
          con los más altos estándares de seguridad. Sophilum se esfuerza por
          ser tu aliado confiable en el mundo de la iluminación.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
