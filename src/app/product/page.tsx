"use client";

import SeeMoreInShopButton from "@/components/buttons/SeeMoreInShopButton";
import { FormatText } from "@/components/format-text/FormatText";
import {
  CART_01,
  CART_02,
  CART_03,
  CART_04,
} from "@/utils/assets/cart-example/cart-example";
import { FACEBOOK, INSTAGRAM, STARS } from "@/utils/assets/icons/icons";
import { INSTAGRAM_URL } from "@/utils/constants/constants";
import { formatPriceARS } from "@/utils/functions/functions";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const PRODUCTS = [
  {
    name: "Producto 1",
    price: 100,
    quantity: 2,
    subtotal: 200,
    image: CART_01,
    id: 1,
    description: "Descripción 1",
  },
  {
    name: "Producto 2",
    price: 200,
    quantity: 5,
    subtotal: 200,
    image: CART_02,
    id: 2,
    description: "Descripción 2",
  },
  {
    name: "Producto 2",
    price: 200,
    quantity: 5,
    subtotal: 200,
    image: CART_02,
    id: 2,
    description: "Descripción 2",
  },
  {
    name: "Producto 2",
    price: 200,
    quantity: 5,
    subtotal: 200,
    image: CART_02,
    id: 2,
    description: "Descripción 2",
  },
];

const ShopPage = () => {
  const productID = {
    _id: 1,
    name: "Lámpara Viking",
    mainImageUrl: CART_01,
    category: "Sofas",
    price: 100,
    quantity: 2,
    subtotal: 200,
    secondaryImageUrls: [CART_02, CART_03, CART_04],
    briefDescription: "Descripción breve del producto 1 para la tienda",
  };
  const [activeTab, setActiveTab] = useState<string>("description");

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;

        // Si hemos llegado al final del carrusel, volvemos al principio
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 10); // Velocidad de desplazamiento, ajústala a tu gusto

    // Limpieza al desmontar
    return () => clearInterval(interval);
  }, []); // Dependencias vacías para que solo se ejecute una vez

  return (
    <div>
      <div className="bg-rose-300 py-5 px-16">
        <p className="text-gray-500 text-sm">Home - Shop - | Sofa</p>
      </div>

      {/* Original layout on Desktop */}
      <div className="hidden md:flex justify-between gap-4 my-8 px-24 lg:max-h-[70vh] relative">
        <div className="flex flex-col space-y-4 hide-scrollbar scroll-container">
          {productID.secondaryImageUrls.map((image: any, index: number) => (
            <img
              key={index}
              src={image}
              alt={`product-image-${index}`}
              className="rounded-lg w-32"
            />
          ))}
        </div>
        <div className="md:w-[40%]">
          <img
            src={productID.mainImageUrl}
            alt="main-product-image"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-[45%] pl-4">
          <div className="border-b border-gray-500">
            <h1 className="text-4xl mb-2">{productID?.name}</h1>
            <h2 className="text-xl text-gray-500 font-medium mb-4">
              {formatPriceARS(productID.price)}
            </h2>
            <img src={STARS} alt="Stars" className="w-28 mb-4" />
            <FormatText text={productID.briefDescription} />
            <div className="flex items-center my-12 justify-start gap-4">
              <div className="flex w-28 h-12 text-gray-700 justify-between rounded-lg border border-gray-500 items-center gap-2 p-2">
                <button
                  // onClick={decrement}
                  className="px-3 h-full rounded hover:bg-gray-400"
                >
                  -
                </button>
                {/* <span className="w-8 text-center">{quantity}</span> */}
                <span className="w-8 text-center">2</span>
                <button
                  // onClick={increment}
                  className="px-3 h-full rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              <button
                //   onClick={() => {
                //     addToCart(
                //       productID._id,
                //       productID.name,
                //       productID.price,
                //       productID.mainImageUrl,
                //       quantity
                //     );
                //     setProductAdded(true);
                //   }}
                className="bg-white rounded-lg hover:bg-black hover:text-white px-5 border py-2 h-11 border-black"
              >
                Añadir al carrito
              </button>
            </div>
          </div>

          <div>
            <h2 className="mt-8 text-[0.95rem]">
              Categoría : &nbsp;
              <span className="text-gray-700">{productID.category}</span>
            </h2>

            <div className="flex">
              <h2 className="my-4 text-[0.95rem]">Contacto : &nbsp;</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-8">
        <div className="border-y py-8 border-gray-300">
          <div className="flex gap-14 justify-center mb-5">
            <button
              className={`text-lg ${
                activeTab === "description"
                  ? "font-medium text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Descripción
            </button>
            <button
              className={`text-lg ${
                activeTab === "additionalInfo"
                  ? "font-medium text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Información adicional
            </button>
          </div>
          <div className="w-3/4 mx-auto">
            {activeTab === "description" && (
              <FormatText
                text={
                  "Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. "
                }
                className="text-gray-700 hidden lg:flex"
              />
            )}
            {activeTab === "additionalInfo" && (
              <FormatText
                text={
                  "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."
                }
                className="text-gray-700 hidden lg:flex"
              />
            )}
          </div>
        </div>
      </div>

      <div className="px-24">
        <h3 className="mt-10 text-center text-[1.7rem] font-medium">
          Productos Relacionados
        </h3>
        <div
          ref={carouselRef}
          className="overflow-x-scroll flex gap-8 hide-scrollbar mt-5"
        >
          {PRODUCTS.map((product, index) => (
            <div key={index} className="overflow-hidden h-90 w-60 md:w-72">
              <img
                alt="product"
                src={product.image}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <SeeMoreInShopButton />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
