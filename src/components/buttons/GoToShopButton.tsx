import Link from "next/link";
import React from "react";

const GoToShopButton = () => {
  return (
    <Link href="/shop">
      <button className="bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-6 py-3">
        Ir a la Tienda
      </button>
    </Link>
  );
};

export default GoToShopButton;
