import React from "react";
import Image from "next/image";
import {
  HASHTAG_01,
  HASHTAG_02,
  HASHTAG_03,
  HASHTAG_04,
  HASHTAG_05,
  HASHTAG_06,
  HASHTAG_07,
  HASHTAG_08,
  HASHTAG_09,
} from "@/utils/assets/hashtag/hashtag";

const SophilumHashtag = () => {
  return (
    <div className="relative bg-white w-full pt-8 pb-32">
      <h2 className="text-stone-300 text-lg font-semibold text-center">
        Comparte tus iluminaciones con nosotros
      </h2>
      <h3 className="text-stone-500 text-3xl mt-3 font-semibold text-center">
        #Sophilum
      </h3>

      <div className="relative w-full">
        <Image src={HASHTAG_01} alt="Hashtag 1" width={200} height={200} />
        <Image src={HASHTAG_02} alt="Hashtag 2" width={200} height={200} />
        <Image src={HASHTAG_03} alt="Hashtag 3" width={200} height={200} />
        <Image src={HASHTAG_04} alt="Hashtag 4" width={200} height={200} />
        <Image src={HASHTAG_05} alt="Hashtag 5" width={200} height={200} />
        <Image src={HASHTAG_06} alt="Hashtag 6" width={200} height={200} />
        <Image src={HASHTAG_07} alt="Hashtag 7" width={200} height={200} />
        <Image src={HASHTAG_08} alt="Hashtag 8" width={200} height={200} />
        <Image src={HASHTAG_09} alt="Hashtag 9" width={200} height={200} />
      </div>
    </div>
  );
};

export default SophilumHashtag;
