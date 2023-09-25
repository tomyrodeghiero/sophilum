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
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
  });

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
        `/api/products?page=${page}&limit=${productsPerPage}`,
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const path = "Inicio - Tienda";

  const pathParts = path.split("-");

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

            {filteredProducts.length > 0 && (
              <div className="flex justify-center my-8 lg:mb-0 w-full">
                {Array.from({ length: paginationInfo.totalPages }).map(
                  (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => {
                        setPaginationInfo({
                          ...paginationInfo,
                          currentPage: index + 1,
                        });
                        window.scrollTo({
                          top: 390,
                          behavior: "smooth",
                        });
                      }}
                      className={`px-4 py-2 mx-2 rounded ${
                        paginationInfo.currentPage === index + 1
                          ? "bg-yellow-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
                <button
                  onClick={() => {
                    if (
                      paginationInfo.currentPage < paginationInfo.totalPages
                    ) {
                      setPaginationInfo({
                        ...paginationInfo,
                        currentPage: paginationInfo.currentPage + 1,
                      });
                    }
                  }}
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
