import { formatPriceARS } from "@/utils/functions/functions";
import Link from "next/link";
import { NoResults } from "../no-results";

export const ProductDisplay = ({ products, resetFilters }: any) => {
  return (
    <div className="w-full mt-5 lg:mt-0">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-3 gap-y-12 gap-5 lg:gap-20">
          {products.map((product: any, index: number) => (
            <div key={index} className="overflow-hidden max-h-96 w-60 md:w-72">
              <img
                alt="product"
                src={product.mainImageUrl}
                className="w-full h-2/3 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">"Descripción"</p>
                <p className="font-semibold mt-2">
                  {formatPriceARS(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoResults onEditSearch={resetFilters} />
      )}
    </div>
  );
};
