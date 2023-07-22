import Link from "next/link";
import React from "react";

const GoToShopButton = () => {
  return (
    <Link href="/shop">
      <button className="bg-green-900 rounded-[40px] text-white px-6 py-3">
        Ir a la Tienda
      </button>
    </Link>
  );
};

export default GoToShopButton;
