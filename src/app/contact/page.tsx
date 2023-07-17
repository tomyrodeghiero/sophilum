import SendButton from "@/components/buttons/SendButton";
import Features from "@/components/features/Features";
import TextInput from "@/components/text-input/TextInput";
import { LOCATION, OFFICE_HOURS, PHONE } from "@/utils/assets/icons/icons";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="relative w-screen h-72">
        <Image src={BACKGROUND} layout="fill" quality={100} alt="Background" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center">
            <Image
              src={SOPHILUM_LOGOTYPE_BACKGROUND}
              alt="Logo"
              width={80}
              height={80}
            />
            <h1 className="-mt-2 text-3xl font-medium">Contacto</h1>
            <p className="text-lg mt-1">Inicio - Contacto</p>
          </div>
        </div>
      </div>

      <div className="px-24 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-medium text-2xl">
            Ponte en Contacto con Nosotros
          </h2>
          <p className="text-center w-[42rem] text-sm text-gray-500 mt-2">
            Para más información sobre nuestros productos y servicios, no dudes
            en enviarnos un WhatsApp. Nuestro personal siempre estará allí para
            ayudarte. ¡No lo dudes!
          </p>
        </div>

        <div className="flex py-12 px-40 w-full gap-32">
          <div className="flex flex-col gap-8 flex-shrink-0">
            <div className="flex gap-4 items-start">
              <Image src={LOCATION} alt="Logo" width={25} height={25} />
              <div className="flex flex-col text-sm">
                <h3 className="font-medium text-xl mb-2">Dirección</h3>
                <p>Cólon 248</p>
                <p>Río Cuarto, Córdoba</p>
                <p className="uppercase">Argentina</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Image src={PHONE} alt="Logo" width={25} height={25} />
              <div className="flex flex-col text-sm">
                <h3 className="font-medium text-xl mb-2">Celular</h3>
                <p>Número: +(54) 9 358 429-6532</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Image src={OFFICE_HOURS} alt="Logo" width={25} height={25} />
              <div className="flex flex-col text-sm">
                <h3 className="font-medium text-xl mb-2">
                  Horario de Atención
                </h3>
                <p>Lunes a Viernes: 9:00 - 20:00</p>
                <p>Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <TextInput as="input" label="Su nombre" placeholder="Abc" />
            <TextInput
              as="input"
              label="Asunto"
              placeholder="Este campo es opcional"
            />
            <TextInput
              as="textarea"
              label="Mensaje"
              placeholder="¡Hola! Me gustaría preguntar acerca de"
            />
            <SendButton />
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default ContactPage;
