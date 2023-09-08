import { formatPriceARS } from "@/utils/functions/functions";
import Link from "next/link";
import { NoResults } from "../no-results";
import { SHOPPING_CART } from "@/utils/assets/icons/icons";
import { FormatText } from "../format-text/FormatText";

export const ProductDisplay = ({ products, resetFilters }: any) => {
  return (
    <div className="w-full mt-5 lg:mt-0">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {products.map((product: any) => (
            <Link
              href={`/product/${product._id}`}
              key={product._id}
              className="product-card group rounded relative transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
            >
              <div className="relative max-h-[30rem]">
                <img
                  alt="product"
                  src={product.mainImageUrl}
                  className="h-52 lg:h-96 w-full object-cover"
                />

                <div className="product-tag absolute bottom-0 left-0 right-0 bg-gray-200 py-3 px-4 opacity-0 group-hover:opacity-60 flex items-center justify-center">
                  <img alt="product" src={SHOPPING_CART} className="h-5 mr-2" />
                  <span className="text-[0.9rem] text-black font-medium uppercase">
                    Ver producto
                  </span>
                </div>
              </div>
              <div className="p-4 pb-5 bg-gray-100">
                <h3 className="text-xl font-medium">{product.name}</h3>
                <FormatText text="Descripción" className="text-gray-700 mb-3" />
                <p className="text-lg font-semibold mt-2">
                  {formatPriceARS(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <NoResults onEditSearch={resetFilters} />
      )}
    </div>
  );
};
