import React from "react";
import Image from "next/image";

const HeaderBackground = ({ background, logo, title, subtitle }: any) => {
  return (
    <div className="relative w-screen h-72">
      <Image src={background} layout="fill" quality={100} alt="Background" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <h1 className="-mt-2 text-4xl font-medium">{title}</h1>
          <p className="text-lg mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBackground;
