"use client";

import SeeMoreInShopButton from "@/components/buttons/SeeMoreInShopButton";
import { FormatText } from "@/components/format-text/FormatText";
import { DROP_DOWN, DROP_RIGHT, STARS } from "@/utils/assets/icons/icons";
import { formatPriceARS } from "@/utils/functions/functions";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/utils/assets/dummy/data";

export default function ShopPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<string>("description");

  const carouselRef = useRef<any>(null);
  const mainImageRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;

        // Si hemos llegado al final del carrusel, volvemos al principio
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 5); // Velocidad de desplazamiento, ajústala a tu gusto

    // Limpieza al desmontar
    return () => clearInterval(interval);
  }, []); // Dependencias vacías para que solo se ejecute una vez

  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const path = "Home - Shop - Sofa";

  const pathParts = path.split("-");

  const [quantity, setQuantity] = useState(1);
  const [productID, setProductID] = useState<any>();

  const [productAdded, setProductAdded] = useState(false);
  const [stock, setStock] = useState<number>(1);

  // Este efecto escuchará los cambios en productAdded y mostrará y ocultará el mensaje en consecuencia.
  useEffect(() => {
    if (productAdded) {
      setTimeout(() => {
        setProductAdded(false);
      }, 7000);
    }
  }, [productAdded]);

  // Function to fetch products
  async function getProductID(): Promise<any> {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(`/api/product/${params.id}`, requestOptions);

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

      const productDB = await response.json();
      console.log("productDB", productDB);
      setStock(productDB.stock);

      // set the ordered chat history instead of setting it
      setProductID(productDB);
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  }

  useEffect(() => {
    getProductID();
  }, []);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      toast.warning(
        `No hay más stock de este producto. Solo quedan ${stock} unidades.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  if (!mainImageRef || !productID) {
    return null;
  }

  const showAddedToCart = () => {
    return toast.success(
      `El Producto ${productID.name} ha sido añadido a su carrito! 🛍️ 🎉`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const { addToCart } = useCart();

  return (
    <div>
      <div className="bg-rose-300 py-5 px-5 lg:px-16">
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

      {/* Carousel on Mobile */}
      <div className="block px-4 md:hidden">
        <Carousel
          className="mt-5"
          showThumbs={false}
          emulateTouch={true}
          showArrows={false}
          showStatus={false}
        >
          {[productID.mainImageUrl, ...productID.secondaryImageUrls].map(
            (image: any, index: number) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`product-image-${index}`}
                  className="w-full object-cover h-[400px] rounded-lg"
                />
              </div>
            )
          )}
        </Carousel>

        <div className="flex justify-between mt-5">
          <div>
            <h1 className="text-2xl mb-2">{productID?.name}</h1>
            <h2 className="text-yellow-800 mb-5">
              {formatPriceARS(productID.price)}
            </h2>
          </div>

          <div className="flex w-28 h-12 text-gray-700 justify-between rounded items-center gap-2 bg-gray-300 p-2">
            <button
              onClick={decrement}
              className="px-3 h-full rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={increment}
              className="px-3 h-full rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(
              productID._id,
              productID.name,
              productID.price,
              productID.mainImageUrl,
              quantity
            );
            setProductAdded(true);
            showAddedToCart();
          }}
          className="bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-6 py-3"
        >
          Añadir al carrito
        </button>

        <FormatText
          text={productID.briefDescription}
          className="text-gray-700 my-7"
        />

        <div className="border-y border-gray-400 text-[1.1rem]">
          <div
            onClick={() => setDescriptionOpen(!descriptionOpen)}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h2 className="py-4">Descripción</h2>
              <img
                src={DROP_DOWN}
                alt={"Drop drop"}
                className={`h-2 transform ${
                  descriptionOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {descriptionOpen && (
              <FormatText
                text={productID.description}
                className="text-gray-700 mb-3"
              />
            )}
          </div>
        </div>
      </div>

      {/* Original layout on Desktop */}
      <div className="hidden lg:flex justify-between gap-4 my-8 px-24 relative">
        <div className="flex flex-col space-y-4 hide-scrollbar scroll-container">
          {productID.secondaryImageUrls.map((image: any, index: number) => (
            <img
              key={index}
              src={image}
              alt={`product-image-${index}`}
              className="rounded-lg w-32"
            />
          ))}
        </div>
        <div className="md:w-[40%]">
          <img
            src={productID.mainImageUrl}
            alt="main-product-image"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-[45%] pl-4">
          <div className="border-b border-gray-500">
            <h1 className="text-4xl mb-2">{productID?.name}</h1>
            <h2 className="text-xl text-gray-500 font-medium mb-4">
              {formatPriceARS(productID.price)}
            </h2>
            <img src={STARS} alt="Stars" className="w-28 mb-4" />
            <FormatText text={productID.briefDescription} />
            <div className="flex items-center my-12 justify-start gap-4">
              <div className="flex w-28 h-12 text-gray-700 justify-between rounded-lg border border-gray-500 items-center gap-2 p-2">
                <button
                  onClick={decrement}
                  className="px-3 h-full rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={increment}
                  className="px-3 h-full rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart(
                    productID._id,
                    productID.name,
                    productID.price,
                    productID.mainImageUrl,
                    quantity
                  );
                  setProductAdded(true);
                  showAddedToCart();
                }}
                className="bg-green-900 hover:bg-green-700 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 text-white px-6 py-3"
              >
                Añadir al carrito
              </button>
            </div>
          </div>

          <div>
            <h2 className="mt-8 text-[0.95rem]">
              Categoría : &nbsp;
              <span className="text-gray-700">{productID.category}</span>
            </h2>

            <div className="flex">
              <h2 className="my-4 text-[0.95rem]">Contacto : &nbsp;</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-full gap-8">
        <div className="border-y py-8 border-gray-300">
          <div className="flex gap-14 justify-center mb-5">
            <button
              className={`text-lg ${
                activeTab === "description"
                  ? "font-medium text-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Descripción
            </button>
          </div>
          <div className="w-3/4 mx-auto">
            {activeTab === "description" && (
              <FormatText
                text={productID.description}
                className="text-gray-700 hidden lg:flex"
              />
            )}
          </div>
        </div>
      </div>

      <div className="lg:px-24 w-full">
        <h3 className="mt-10 text-center text-[1.7rem] font-medium">
          Productos Relacionados
        </h3>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll gap-8 hide-scrollbar my-6"
        >
          {PRODUCTS.map((product: any) => (
            <div key={product.id} className="min-w-[200px]">
              <img
                src={product.image}
                alt={product?.name}
                className="object-cover h-48 w-full rounded-lg"
              />
              <h4 className="mt-4 w-full truncate">{product?.name}</h4>
              <p className="text-yellow-800 mt-1">${product.price}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <SeeMoreInShopButton />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
