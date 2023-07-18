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

      <div className="flex flex-col text-black pt-5 lg:py-16 lg:px-40">
        <h1 className="text-3xl font-medium lg:text-center">
          Garantías de Nuestros Productos
        </h1>
        <p className="text-[0.9rem] mt-5 lg:text-base">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>

        <h3 className="text-2xl mt-10">Seguridad</h3>
        <p className="mt-3 mb-5">
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
