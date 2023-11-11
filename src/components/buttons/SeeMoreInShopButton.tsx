import Link from "next/link";
import React from "react";

const SeeMoreInShopButton = () => {
  return (
    <div className="flex justify-center w-full">
      <Link
        href="/shop"
        className="bg-white border border-yellow-600 hover:bg-yellow-600 p-3 my-8 lg:mb-8 px-8 font-medium hover:text-white focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 text-yellow-600 py-3"
      >
        Ver más en la Tienda
      </Link>
    </div>
  );
};

export default SeeMoreInShopButton;
