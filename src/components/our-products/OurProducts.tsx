"use client";

import { formatPriceARS } from "@/utils/functions/functions";
import React, { useEffect, useState } from "react";
import SeeMoreInShopButton from "../buttons/SeeMoreInShopButton";
import { SHOPPING_CART } from "@/utils/assets/icons/icons";
import Link from "next/link";
import { FormatText } from "../format-text/FormatText";

type Product = {
  mainImageUrl: string;
  name: string;
  price: number;
  _id: string;
};

const OurProducts = () => {
  // Add use states
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
  });

  // Function to fetch products
  // Function to fetch products
  async function getProducts(page = 1): Promise<any> {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `/api/products?page=${page}&limit=${12}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else if (
        !response.headers.get("Content-Type")?.includes("application/json")
      ) {
        throw new Error(
          `Invalid content type. Expected application/json but received ${response.headers.get(
            "Content-Type"
          )}`
        );
      }

      const productsDB = await response.json();
      // Cuando se recuperan los productos, también se establece la información de paginación
      setProducts(productsDB.products);
      setPaginationInfo({
        currentPage: productsDB.currentPage,
        totalPages: productsDB.totalPages,
        totalProducts: productsDB.totalProducts,
      });
    } catch (error) {
      console.error("error", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts(paginationInfo.currentPage);
  }, [paginationInfo.currentPage]);

  return (
    <div className="bg-white w-full pt-8 px-4 lg:px-24">
      <h3 className="text-stone-700 text-3xl font-semibold text-center mb-6">
        Nuestros Productos
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 12).map((product, index) => (
          <Link
            href={`/product/${product._id}`}
            key={index}
            className="product-card group rounded relative transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
          >
            <div className="relative">
              <img
                alt="product"
                src={product.mainImageUrl}
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
              <h3 className="text-xl font-medium">{product.name}</h3>
              {/* <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p> */}
              <p className="text-lg font-semibold mt-2">
                {formatPriceARS(product.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <SeeMoreInShopButton />
    </div>
  );
};

export default OurProducts;
