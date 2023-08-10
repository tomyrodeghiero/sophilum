import Image from "next/image";
import React from "react";

import { formatPriceARS } from "@/utils/functions/functions";
import Features from "@/components/features/Features";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import { CART_01, CART_02 } from "@/utils/assets/cart-example/cart-example";
import { TRASH } from "@/utils/assets/icons/icons";

const CartPage = () => {
  const CART_ITEMS = [
    {
      product: "Producto 1",
      price: 100,
      quantity: 2,
      subtotal: 200,
      image: CART_01,
    },
    {
      product: "Producto 2",
      price: 200,
      quantity: 5,
      subtotal: 200,
      image: CART_02,
    },
  ];

  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Carrito de Compras"
        subtitle="Inicio - Carrito de Compras"
      />

      <div className="px-4 py-8 lg:px-24 lg:py-14 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <thead className="bg-rose-300 mb-8">
                <tr>
                  <th className="hidden lg:block" />
                  <th className="p-3 text-center font-medium">Producto</th>
                  <th className="p-3 text-center font-medium">Precio</th>
                  <th className="p-3 text-center font-medium">Cantidad</th>
                  <th className="p-3 text-center font-medium">Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {CART_ITEMS.map((item, index) => (
                  <tr key={index}>
                    <td className="hidden lg:block lg:px-3 lg:py-10">
                      <Image
                        src={item.image}
                        alt={item.product}
                        width={90}
                        height={90}
                        className="rounded-lg mx-auto"
                      />
                    </td>
                    <td className="px-3 py-10 text-center">{item.product}</td>
                    <td className="px-3 py-10 text-center">
                      {formatPriceARS(item.price)}
                    </td>
                    <td className="px-3 py-10 text-center">
                      <p className="rounded border inline justify-center items-center py-1 px-3 border-gray-500">
                        {item.quantity}
                      </p>
                    </td>
                    <td className="px-3 py-10 text-center">
                      {formatPriceARS(item.subtotal)}
                    </td>
                    <td className="px-3 py-10 text-center">
                      <Image
                        src={TRASH}
                        alt="Trash"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/4 bg-rose-300 pt-5 pb-16 px-4 lg:px-10">
          <h1 className="font-semibold text-xl text-center mb-8">
            Total del Carrito
          </h1>
          <div className="flex justify-between mb-6 text-sm">
            <p className="font-medium">Subtotal</p>
            <p className="text-gray-500 font-normal">{formatPriceARS(195)}</p>
          </div>

          <div className="flex justify-between font-medium mb-5">
            <p className="text-sm">Total</p>
            <p className="text-lg text-yellow-600">{formatPriceARS(195)}</p>
          </div>

          <button className="mx-auto flex justify-center rounded-xl border py-[0.7rem] text-center w-full border-black">
            Ir a Pagar
          </button>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default CartPage;
