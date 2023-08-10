import React from "react";
import Image from "next/image";
import { DROP_RIGHT } from "@/utils/assets/icons/icons";

const HeaderBackground = ({ background, logo, title, subtitle }: any) => {
  const subtitleParts = subtitle.split("-");

  return (
    <div className="relative w-screen h-48 lg:h-72">
      <Image src={background} layout="fill" quality={100} alt="Background" />

      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <h1 className="-mt-2 text-2xl lg:text-4xl font-medium">{title}</h1>
          <div className="flex gap-2 lg:text-lg mt-1">
            {subtitleParts.map((part: string, index: number) => (
              <React.Fragment key={index}>
                <span>{part.trim()}</span>
                {index !== subtitleParts.length - 1 && (
                  <Image src={DROP_RIGHT} alt="Arrow" width={6} height={6} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBackground;
