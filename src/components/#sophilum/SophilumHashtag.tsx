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
    <div className="hidden lg:block relative bg-white w-full pt-8 pb-32">
      <h2 className="text-stone-300 text-lg font-semibold text-center">
        Comparte tus iluminaciones con nosotros
      </h2>
      <h3 className="text-stone-500 text-3xl mt-3 font-semibold text-center">
        #Sophilum
      </h3>

      <div className="collage-container relative w-full h-[45rem]">
        <Image
          className="hashtag-img hashtag-1 rounded"
          src={HASHTAG_01}
          alt="Hashtag 1"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-2 rounded"
          src={HASHTAG_02}
          alt="Hashtag 2"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-3 rounded"
          src={HASHTAG_03}
          alt="Hashtag 3"
          width={200}
          height={200}
        />
        {/* <Image
          className="hashtag-img hashtag-4 rounded"
          src={HASHTAG_04}
          alt="Hashtag 4"
          width={200}
          height={200}
        /> */}
        <Image
          className="hashtag-img hashtag-5 rounded"
          src={HASHTAG_05}
          alt="Hashtag 5"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-6 rounded"
          src={HASHTAG_06}
          alt="Hashtag 6"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-7 rounded-lg"
          src={HASHTAG_07}
          alt="Hashtag 7"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-8 rounded"
          src={HASHTAG_08}
          alt="Hashtag 8"
          width={200}
          height={200}
        />
        <Image
          className="hashtag-img hashtag-9 rounded"
          src={HASHTAG_09}
          alt="Hashtag 9"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default SophilumHashtag;
