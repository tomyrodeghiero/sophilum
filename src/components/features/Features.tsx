import {
  FREE_SHIPPING,
  HIGH_QUALITY,
  WARRANTY,
} from "@/utils/assets/icons/icons";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex items-center py-20 px-10 bg-orange-100 justify-between">
      <div className="flex items-center gap-4">
        <Image src={HIGH_QUALITY} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Alta Calidad</h2>
          <p className="font-medium text-lg text-gray-600">
            Excelentes Materiales
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image src={WARRANTY} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Garantía</h2>
          <p className="font-medium text-lg text-gray-600">Hasta a 1 Año</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Image src={FREE_SHIPPING} alt="Logo" width={75} height={75} />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-2xl">Envío Gratis</h2>
          <p className="font-medium text-lg text-gray-600">
            Compras mayores a $15.000
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
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
