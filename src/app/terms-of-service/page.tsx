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
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>

        <h3 className="text-xl mt-6 lg:text-2xl mb-3">Seguridad</h3>
        <p className="text-sm lg:text-base mb-5">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque. Duis rutrum dictum libero quis rutrum.
          Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam
          fringilla molestie velit, eget pellentesque risus scelerisque a. Nam
          ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna
          enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
          Rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
