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

  useEffect(() => {
    let tempProducts = products;

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
  ]);

  const resetFilters = () => {
    setIsOnSale(false);
    setIsOnStock(true);
    setPriceRange([0, Infinity]);
    setSortByPrice("");
    setSortByCategory("");
    setSearchQuery("");
  };

  if (isLoading) return null;

  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Tienda"
        subtitle="Inicio - Tienda"
      />
      <div className="bg-rose-300 pt-6 pb-5 px-16 mt-[-7.5px] z-50 opacity-100">
        <p className="text-gray-500 text-sm">Home - Shop - | Sofa</p>
      </div>

      <div className="flex flex-col text-black pt-5 lg:py-10 lg:px-40">
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
          <ProductDisplay
            resetFilters={resetFilters}
            products={filteredProducts}
          />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default ShopPage;
