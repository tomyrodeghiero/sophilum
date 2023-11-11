import {
  FREE_SHIPPING,
  HIGH_QUALITY,
  WARRANTY,
} from "@/utils/assets/icons/icons";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-8 lg:py-20 px-10 bg-orange-100 justify-between">
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-10 lg:mb-0 text-center lg:text-left">
        <Image src={HIGH_QUALITY} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Alta Calidad</h2>
          <p className="font-medium text-lg text-gray-600">
            Excelentes Materiales
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 mb-5 lg:mb-0 text-center lg:text-left">
        <Image src={WARRANTY} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Compromiso</h2>
          <p className="font-medium text-lg text-gray-600">
            Satisfacción Garantizada
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 mb-10 lg:mb-0 text-center lg:text-left">
        <Image src={FREE_SHIPPING} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Servicio Eficiente</h2>
          <p className="font-medium text-lg text-gray-600">
            Entrega Profesional
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
        <Image src={FREE_SHIPPING} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Soporte de Confianza</h2>
          <p className="font-medium text-lg text-gray-600">
            Asesoramiento de primera
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
