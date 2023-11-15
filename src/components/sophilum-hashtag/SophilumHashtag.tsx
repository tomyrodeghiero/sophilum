"use client"

import React from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Import your images
import {
  HASHTAG_01,
  HASHTAG_02,
  HASHTAG_03,
  HASHTAG_05,
  HASHTAG_06,
  HASHTAG_07,
  HASHTAG_08,
  HASHTAG_09,
} from "@/utils/assets/hashtag/hashtag";

const SophilumHashtag = () => {
  // Configurations for the carousel
  const settings = {
    showArrows: false,
    infiniteLoop: true,
    showStatus: false,
    showIndicators: true,
  };

  // Array of images for carousel
  const images = [HASHTAG_01, HASHTAG_02, HASHTAG_03, HASHTAG_05, HASHTAG_06, HASHTAG_07, HASHTAG_08, HASHTAG_09];

  return (
    <div className="relative bg-white w-full pt-8 lg:pb-32">
      <h2 className="text-stone-300 text-lg font-semibold text-center">
        Comparte tus iluminaciones con nosotros
      </h2>
      <h3 className="text-stone-500 text-3xl mt-3 font-semibold text-center mb-4">
        #Sophilum
      </h3>

      {/* Carousel for Mobile */}
      <div className="lg:hidden">
        <Carousel {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              {/* Adjust the width here */}
              <img src={image} alt={`Hashtag ${index + 1}`} className="w-8" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Collage for Desktop */}
      <div className="hidden lg:block relative collage-container w-full h-[45rem]">
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
