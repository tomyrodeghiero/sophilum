import { formatPriceARS } from "@/utils/functions/functions";
import React from "react";
import SeeMoreInShopButton from "../buttons/SeeMoreInShopButton";

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
    <div className="bg-white w-full py-8 px-6 lg:px-24">
      <h3 className="text-stone-700 text-3xl font-semibold text-center mb-6">
        Nuestros Productos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="overflow-hidden h-90 w-60 md:w-72">
            <img
              alt="product"
              src={product.img}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-medium">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <SeeMoreInShopButton />
    </div>
  );
};

export default OurProducts;
