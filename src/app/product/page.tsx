"use client";

import SeeMoreInShopButton from "@/components/buttons/SeeMoreInShopButton";
import { FormatText } from "@/components/format-text/FormatText";
import {
  CART_01,
  CART_02,
  CART_03,
  CART_04,
} from "@/utils/assets/cart-example/cart-example";
import { DROP_DOWN, DROP_RIGHT, STARS } from "@/utils/assets/icons/icons";
import { formatPriceARS } from "@/utils/functions/functions";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
    name: "Producto 1",
    price: 100,
    quantity: 2,
    subtotal: 200,
    image: CART_01,
    id: 1,
    description: "Descripción 1",
  },
  {
    name: "Producto 1",
    price: 100,
    quantity: 2,
    subtotal: 200,
    image: CART_01,
    id: 1,
    description: "Descripción 1",
  },
];

const ShopPage = () => {
  const productID = {
    _id: 1,
    name: "Lámpara Viking",
    description: "Lámpara Viking de madera",
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
    }, 200); // Velocidad de desplazamiento, ajústala a tu gusto

    // Limpieza al desmontar
    return () => clearInterval(interval);
  }, []); // Dependencias vacías para que solo se ejecute una vez

  const [descriptionOpen, setDescriptionOpen] = useState(false);

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

  const path = "Home - Shop - Sofa";

  const pathParts = path.split("-");

  return (
    <div>
      <div className="bg-rose-300 py-5 px-5 lg:px-16">
        <div className="flex gap-2">
          {pathParts.map((part: string, index: number) => (
            <React.Fragment key={index}>
              <span className="text-gray-500 text-sm">{part.trim()}</span>
              {index !== pathParts.length - 1 && (
                <Image src={DROP_RIGHT} alt="Arrow" width={6} height={6} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Carousel on Mobile */}
      <div className="block px-4 md:hidden">
        <Carousel
          className="mt-5"
          showThumbs={false}
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
        >
          {[productID.mainImageUrl, ...productID.secondaryImageUrls].map(
            (image: any, index: number) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`product-image-${index}`}
                  className="w-full object-cover h-[400px] rounded-lg"
                />
              </div>
            )
          )}
        </Carousel>

        <div className="flex justify-between mt-5">
          <div>
            <h1 className="text-2xl mb-2">{productID?.name}</h1>
            <h2 className="text-yellow-800 mb-5">
              {formatPriceARS(productID.price)}
            </h2>
          </div>

          <div className="flex w-28 h-12 text-gray-700 justify-between rounded items-center gap-2 bg-gray-300 p-2">
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
        </div>

        <button
          onClick={() => {
            // addToCart(
            //   productID._id,
            //   productID.name,
            //   productID.price,
            //   productID.mainImageUrl,
            //   quantity
            // );
            // setProductAdded(true);

            // Usando react-toastify para notificar al usuario.
            toast.success(
              `El Producto ${productID.name} ha sido añadido a su carrito! 🛍️ 🎉`,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              }
            );
          }}
          className="bg-white hover:bg-black hover:text-white w-full border py-2 h-11 text-[0.85rem] font-medium px-10 border-black rounded uppercase"
        >
          Añadir al carrito
        </button>

        <FormatText
          text={productID.briefDescription}
          className="text-gray-700 my-7"
        />

        <div className="border-y border-gray-400 text-[1.1rem]">
          <div
            onClick={() => setDescriptionOpen(!descriptionOpen)}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h2 className="py-4">Descripción</h2>
              <img
                src={DROP_DOWN}
                alt={"Drop drop"}
                className={`h-2 transform ${
                  descriptionOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {descriptionOpen && (
              <FormatText
                text={productID.description}
                className="text-gray-700 mb-3"
              />
            )}
          </div>
        </div>
      </div>

      {/* Original layout on Desktop */}
      <div className="hidden lg:flex justify-between gap-4 my-8 px-24 lg:max-h-[70vh] relative">
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

      <div className="hidden lg:flex w-full gap-8">
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

      <div className="lg:px-24 w-full">
        <h3 className="mt-10 text-center text-[1.7rem] font-medium">
          Productos Relacionados
        </h3>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll gap-8 hide-scrollbar my-6"
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="min-w-[200px]">
              <img
                src={product.image}
                alt={product?.name}
                className="object-cover h-48 w-full rounded-lg"
              />
              <h4 className="mt-4 w-full truncate">{product?.name}</h4>
              <p className="text-yellow-800 mt-1">${product.price}</p>
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
