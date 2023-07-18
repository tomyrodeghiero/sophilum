"use client";

import { WHATSAPP } from "@/utils/assets/icons/icons";
import { PHONE_NUMBER } from "@/utils/constants/constants";
import React from "react";

const WhatsApp = () => {
  const message =
    "Hola, estoy interesado en una genial iluminación. ¿Podrían darme más información?";

  const handleClick = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <img
        className="hover-lift h-16 cursor-pointer"
        src={WHATSAPP}
        alt="WhatsApp"
        onClick={handleClick}
      />
    </div>
  );
};

export default WhatsApp;
