import { formatPriceARS } from "@/utils/functions/functions";
import React from "react";
import SeeMoreInShopButton from "../buttons/SeeMoreInShopButton";
import { SHOPPING_CART } from "@/utils/assets/icons/icons";
import Link from "next/link";

const OurProducts = () => {
  const products = [
    {
      img: "/assets/products/image-01.png",
      title: "Producto 1",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-02.png",
      title: "Producto 2",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-03.png",
      title: "Producto 3",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-04.png",
      title: "Producto 4",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-05.png",
      title: "Producto 4",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-03.png",
      title: "Producto 4",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-07.png",
      title: "Producto 4",
      description: "Descripción",
      price: formatPriceARS(200),
    },
    {
      img: "/assets/products/image-08.png",
      title: "Producto 4",
      description: "Descripción",
      price: formatPriceARS(200),
    },
  ];

  return (
    <div className="bg-white w-full pt-8 px-4 lg:px-24">
      <h3 className="text-stone-700 text-3xl font-semibold text-center mb-6">
        Nuestros Productos
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link
            href="/product"
            key={index}
            className="product-card group rounded relative transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
          >
            <div className="relative">
              <img
                alt="product"
                src={product.img}
                className="h-48 lg:h-96 w-full object-cover"
              />

              <div className="product-tag absolute bottom-0 left-0 right-0 bg-gray-200 py-3 px-4 opacity-0 group-hover:opacity-60 flex items-center justify-center">
                <img alt="product" src={SHOPPING_CART} className="h-5 mr-2" />
                <span className="text-[0.9rem] text-black font-medium uppercase">
                  Ver producto
                </span>
              </div>
            </div>
            <div className="p-4 pb-5 bg-gray-100">
              <h3 className="text-xl font-medium">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <SeeMoreInShopButton />
    </div>
  );
};

export default OurProducts;
