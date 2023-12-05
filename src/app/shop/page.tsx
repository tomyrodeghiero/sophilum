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
import SkeletonCard from "@/components/skeleton-card";
import { getMinPrice } from "@/utils/functions/functions";

const ShopPage = () => {
  const PRODUCTS_PER_PAGE = 9; // Cambia esto según tus necesidades

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
  const [currentPage, setCurrentPage] = useState(1);
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
      const response = await fetch(
        `/api/products?page=1&limit=200`,
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

      const filteredProducts = productsDB.products.filter(
        (product: any) => product.username !== "joyasboulevard"
      );

      // set the filtered products
      setProducts(filteredProducts);
    } catch (error) {
      console.error("error", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let tempProducts = [...products];

    if (searchQuery) {
      tempProducts = tempProducts.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortByPrice) {
      case "Menor precio":
        tempProducts.sort(
          (a, b) => parseFloat(getMinPrice(a)) - parseFloat(getMinPrice(b))
        );
        setFilteredProducts(tempProducts);
        break;
      case "Mayor precio":
        tempProducts.sort(
          (a, b) => parseFloat(getMinPrice(b)) - parseFloat(getMinPrice(a))
        );
        setFilteredProducts(tempProducts);
        break;
      default:
        break;
    }

    // sort by category
    if (sortByCategory) {
      tempProducts = tempProducts.filter(
        (product: any) =>
          product.category.toLowerCase() === sortByCategory.toLowerCase()
      );

      setFilteredProducts(tempProducts);
    }

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

    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = tempProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setFilteredProducts(currentProducts);

    if (searchQuery) {
      tempProducts = tempProducts.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(tempProducts);
    }
  }, [
    currentPage,
    products,
    isOnSale,
    isOnStock,
    priceRange,
    sortByPrice,
    sortByCategory,
    searchQuery,
  ]);

  const resetFilters = () => {
    setIsOnSale(false);
    setIsOnStock(true);
    setPriceRange([0, Infinity]);
    setSortByPrice("");
    setSortByCategory("");
    setSearchQuery("");
  };

  const path = "Inicio - Tienda";

  const pathParts = path.split("-");

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchQuery("");
    setSortByCategory("");
    setSortByPrice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  console.log("products", products);
  console.log("products.length", products.length);
  console.log("PRODUCTS_PER_PAGE", PRODUCTS_PER_PAGE);
  console.log("TOTAL PAGES", totalPages);

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
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <ProductDisplay
                resetFilters={resetFilters}
                products={filteredProducts}
              />
            )}

            {totalPages > 1 && (
              <div className="flex justify-center my-8 lg:mb-0 w-full">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 mx-2 rounded ${
                        currentPage === page
                          ? "bg-yellow-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
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
