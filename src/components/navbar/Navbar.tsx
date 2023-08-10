"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SOPHILUM_LOGOTYPE, SPAIN } from "@/utils/assets/images";
import {
  CLOSE_MENU,
  DROP_RIGHT,
  HISTORY,
  HOME,
  MENU,
  SEARCH,
  SHOPPING_CART,
} from "@/utils/assets/icons/icons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [isMobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setMobile(window.innerWidth < 768);
      });
      isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }
  }, [isOpen]);

  if (isMobile) {
    return (
      <nav className="flex flex-wrap justify-between items-center py-5 px-4 lg:hidden relative z-50">
        <Link href="/">
          <img className="h-8" src={SOPHILUM_LOGOTYPE} alt="Sophilum" />
        </Link>

        <div className="cursor-pointer">
          {!isOpen && (
            <div className="flex gap-4 items-center">
              <Link href="/shop">
                <img className="h-5" src={SHOPPING_CART} alt="Shopping" />
              </Link>
              <img className="h-4" src={MENU} alt="Menu" onClick={toggleMenu} />
            </div>
          )}
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ease-in-out duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } flex flex-col justify-between space-y-4 z-40 p-5 overflow-auto`}
        >
          <div>
            <div className="flex justify-between items-center">
              <Link href="/">
                <img className="h-8" src={SOPHILUM_LOGOTYPE} alt="Sophilum" />
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/shopping-cart">
                  <img
                    className="h-5 cursor-pointer"
                    src={SHOPPING_CART}
                    alt="Shopping cart"
                  />
                </Link>
                <div onClick={toggleMenu}>
                  <img
                    className="h-5 cursor-pointer"
                    src={CLOSE_MENU}
                    alt="Close Menu"
                  />
                </div>
              </div>
            </div>
            <div className="my-8">
              <div className="flex justify-between">
                <h1 className="text-xl mb-6">Navegación</h1>

                {/* <LocaleSwitcher /> */}
              </div>
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                >
                  <div className="flex gap-4">
                    <img className="h-6 cursor-pointer" src={HOME} alt="Home" />
                    <h2 className="text-xl">Home</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </Link>
                <Link
                  href="/shop"
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                >
                  <div className="flex gap-4">
                    <img
                      className="h-6 cursor-pointer"
                      src={SHOPPING_CART}
                      alt="Shopping"
                    />
                    <h2 className="text-xl">Tienda</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </Link>
                <Link
                  href="/about"
                  className="flex justify-between border-b border-gray-400 py-7 items-center"
                >
                  <div className="flex gap-4">
                    <img
                      className="h-6 cursor-pointer"
                      src={HISTORY}
                      alt="Our History"
                    />
                    <h2 className="text-xl">Nuestra Historia</h2>
                  </div>
                  <img
                    className="h-4 cursor-pointer"
                    src={DROP_RIGHT}
                    alt="Drop right"
                  />
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="bg-white border py-3 text-[0.85rem] font-medium px-10 border-black rounded mt-12 uppercase"
          >
            Contacto
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center px-16 py-8 bg-white">
      <Link href="/">
        <Image src={SOPHILUM_LOGOTYPE} alt="Logo" width={120} height={120} />
      </Link>

      <div className="space-x-16">
        <Link href="/">Inicio</Link>
        <Link href="/shop">Tienda</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
      </div>

      <div className="flex space-x-8">
        <Image src={SEARCH} alt="Search" width={30} height={30} />
        <Link href="/cart">
          <Image src={SHOPPING_CART} alt="Cart" width={30} height={30} />
        </Link>
        <Image src={SPAIN} alt="Spanish Flag" width={30} height={30} />
      </div>
    </nav>
  );
}
