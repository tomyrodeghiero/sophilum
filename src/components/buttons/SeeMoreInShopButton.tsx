import Link from "next/link";
import React from "react";

const SeeMoreInShopButton = () => {
  return (
    <Link href="/shop" className="flex justify-center w-full">
      <button className="bg-white border border-yellow-600 p-3 px-8 font-medium  text-yellow-600">
        Ver más en la Tienda
      </button>
    </Link>
  );
};

export default SeeMoreInShopButton;
