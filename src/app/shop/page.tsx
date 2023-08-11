"use client";

import HeaderBackground from "@/components/header-background/HeaderBackground";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductsFilterSidebar } from "@/components/products-filter-sidebar/ProductsFilterSidebar";
import { ProductDisplay } from "@/components/products-display";
import Features from "@/components/features/Features";
import Image from "next/image";
import { DROP_RIGHT } from "@/utils/assets/icons/icons";

const ShopPage = () => {
  const searchParams = useSearchParams();
  const searchQueryParam = searchParams.get("search");
  const categoryQueryParam = searchParams.get("category");

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOnSale, setIsOnSale] = useState(false);
  const [isOnStock, setIsOnStock] = useState(true);
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortByPrice, setSortByPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState(searchQueryParam || "");
  const [sortByCategory, setSortByCategory] = useState(
    categoryQueryParam || ""
  );

  // Function to fetch products
  async function getProducts(): Promise<any> {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("/api/products", requestOptions);

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
      setProducts(productsDB);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Cambia esto según tus necesidades

  useEffect(() => {
    let tempProducts = products;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = tempProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setFilteredProducts(currentProducts);

    // Filter products on sale
    if (isOnSale) {
      tempProducts = tempProducts.filter((product: any) => product.isOnSale);
    }

    // Filter products in stock
    if (isOnStock) {
      tempProducts = tempProducts.filter((product: any) => product.stock > 0);
    } else {
      tempProducts = tempProducts.filter((product: any) => product.stock <= 0);
    }

    // Filter products within price range
    tempProducts = tempProducts.filter(
      (product: any) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter products by search query
    if (searchQuery) {
      tempProducts = tempProducts.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter products by category
    if (sortByCategory) {
      tempProducts = tempProducts.filter(
        (product: any) =>
          product.category.toLowerCase() === sortByCategory.toLowerCase()
      );
    }

    // Sort products
    switch (sortByPrice) {
      case "Menor precio":
        tempProducts.sort((a: any, b: any) => a.price - b.price);
        break;
      case "Mayor precio":
        tempProducts.sort((a: any, b: any) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(tempProducts);
  }, [
    products,
    isOnSale,
    isOnStock,
    priceRange,
    sortByPrice,
    sortByCategory,
    searchQuery,
    searchQueryParam,
    categoryQueryParam,
    currentPage,
  ]);

  const resetFilters = () => {
    setIsOnSale(false);
    setIsOnStock(true);
    setPriceRange([0, Infinity]);
    setSortByPrice("");
    setSortByCategory("");
    setSearchQuery("");
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const path = "Inicio - Tienda";

  const pathParts = path.split("-");

  if (isLoading) return null;

  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Tienda"
        subtitle="Inicio - Tienda"
      />
      <div className="bg-rose-300 pt-6 pb-5 px-5 lg:px-16 mt-[-7.5px] z-50 opacity-100">
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

      <div className="flex flex-col text-black pt-5 lg:py-10 px-5 lg:px-28">
        <h2 className="font-medium text-[1.5rem] my-5 mb-4">Tienda</h2>
        <div className="lg:flex gap-10">
          <ProductsFilterSidebar
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            onSortByPrice={setSortByPrice}
            onSortByCateogory={setSortByCategory}
            isOnSale={isOnSale}
            setIsOnSale={setIsOnSale}
            isOnStock={isOnStock}
            setIsOnStock={setIsOnStock}
            onPriceChange={setPriceRange}
            onResetFilters={resetFilters}
          />

          <div className="flex-col w-full">
            <ProductDisplay
              resetFilters={resetFilters}
              products={filteredProducts}
            />

            {filteredProducts.length > 0 && (
              <div className="flex justify-center my-8 lg:mb-0 w-full">
                {[1, 2, 3].map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 mx-2 rounded ${
                      currentPage === pageNumber
                        ? "bg-yellow-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  className="px-4 py-2 rounded mx-2 bg-gray-200"
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default ShopPage;
