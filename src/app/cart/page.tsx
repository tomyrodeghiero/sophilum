"use client";

import Image from "next/image";
import React from "react";

import { formatPriceARS } from "@/utils/functions/functions";
import Features from "@/components/features/Features";
import HeaderBackground from "@/components/header-background/HeaderBackground";
import {
  BACKGROUND,
  SOPHILUM_LOGOTYPE_BACKGROUND,
} from "@/utils/assets/images";
import {
  EMPTY_CART,
  MODO,
  TRASH,
  WHATSAPP_CART,
} from "@/utils/assets/icons/icons";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/utils/interfaces/interfaces";
import GoToShopButton from "@/components/buttons/GoToShopButton";
import { PHONE_NUMBER } from "@/utils/constants/constants";
import Link from "next/link";

const CartPage = () => {
  const calculateTotal = (cart: CartItem[]): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const { cart, removeFromCart } = useCart();

  const generateWhatsAppLink = (cart: CartItem[]) => {
    let message = "Hola, me gustaría hacer la siguiente compra:\n\n";

    cart.forEach((item) => {
      message += `*Producto:* ${item.name}, *Tamaño:* ${item.size}, *Color:* ${
        item.color
      }, *Cantidad:* ${item.quantity}, *Precio:* ${formatPriceARS(
        item.price
      )}\n`;
    });

    message += `\n*Total a pagar:* ${formatPriceARS(calculateTotal(cart))}\n\n`;
    message += "¡Gracias!";

    const phone = PHONE_NUMBER;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  return (
    <div>
      <HeaderBackground
        background={BACKGROUND}
        logo={SOPHILUM_LOGOTYPE_BACKGROUND}
        title="Carrito de Compras"
        subtitle="Inicio - Carrito de Compras"
      />

      <div className="px-4 py-8 lg:px-24 lg:py-14 flex flex-col lg:flex-row gap-8">
        {cart.length === 0 ? (
          <div className="flex-col w-full justify-center text-center items-center">
            <img className="h-80 w-full" src={EMPTY_CART} alt="Empty cart" />
            <h1 className="mt-8 text-[1.5rem]">Su Carrito está Vacío</h1>
            <p className="font-medium text-gray-500 mt-4">
              Parece que aún no has añadido Productos a tu Carrito
            </p>

            <div className="w-full flex justify-center items-center mt-8">
              <GoToShopButton />
            </div>
          </div>
        ) : (
          <>
            <div className="w-full lg:w-3/4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                  <thead className="bg-rose-300 mb-8">
                    <tr>
                      <th className="hidden lg:block" />
                      <th className="p-3 text-center font-medium">Producto</th>
                      <th className="p-3 text-center font-medium">Precio</th>
                      <th className="p-3 text-center font-medium">Cantidad</th>
                      <th className="p-3 text-center font-medium">Color</th>
                      <th className="p-3 text-center font-medium">Medidas</th>
                      <th className="p-3 text-center font-medium">Subtotal</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="hidden lg:block lg:py-10">
                          <img
                            src={item.mainImageUrl}
                            alt={item.name}
                            className="rounded-lg h-40 w-40 mx-auto"
                          />
                        </td>
                        <td className="px-3 py-10 text-center">{item.name}</td>
                        <td className="px-3 py-10 text-center">
                          {formatPriceARS(item.price)}
                        </td>
                        <td className="px-3 py-10 text-center">
                          <p className="rounded border inline justify-center items-center py-1 px-3 border-gray-500">
                            {item.quantity}
                          </p>
                        </td>
                        <td className="px-3 py-10 text-center">{item.color}</td>
                        <td className="px-3 py-10 text-center">{item.size}</td>
                        <td className="px-3 py-10 text-center">
                          {formatPriceARS(item.price * item.quantity)}
                        </td>
                        <td className="px-3 py-10 text-center">
                          <Image
                            src={TRASH}
                            alt="Trash"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                            onClick={() => removeFromCart(item.productId)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full lg:w-1/4 bg-rose-300 pt-5 pb-8 px-4 lg:px-10">
              <h1 className="font-semibold text-xl text-center mb-8">
                Total del Carrito
              </h1>
              <div className="flex justify-between mb-6 text-sm">
                <p className="font-medium">Subtotal</p>
                <p className="text-gray-500 font-normal">
                  {formatPriceARS(calculateTotal(cart))}
                </p>
              </div>

              <div className="flex justify-between font-medium mb-5">
                <p className="text-sm">Total</p>
                <p className="text-lg text-yellow-600">
                  {formatPriceARS(calculateTotal(cart))}
                </p>
              </div>

              <Link
                href={generateWhatsAppLink(cart)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 flex gap-2 items-center justify-center w-full mx-auto focus:outline-none focus:ring-1 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-xl p-2"
              >
                <Image
                  alt="WhatsApp"
                  src={WHATSAPP_CART}
                  width={30}
                  height={30}
                />
                <span className="text-sm text-white font-medium">
                  Comprar por WhatsApp
                </span>
              </Link>

              <button className="bg-slate-800 mt-5 flex gap-2 items-center justify-center w-full mx-auto focus:outline-none focus:ring-1 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-xl p-2">
                <Image alt="Modo" src={MODO} width={30} height={30} />
                <span className="text-sm text-white font-medium">
                  Pagar con MODO
                </span>
              </button>
            </div>
          </>
        )}
      </div>

      <Features />
    </div>
  );
};

export default CartPage;
