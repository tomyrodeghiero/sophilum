import { formatPriceARS } from "@/utils/functions/functions";
import Link from "next/link";
import { NoResults } from "../no-results";

export const ProductDisplay = ({ products, resetFilters }: any) => {
  return (
    <div className="w-full mt-5 lg:mt-0">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {products.map((product: any, index: number) => (
            <Link
              href="/product"
              key={index}
              className="flex flex-col overflow-hidden bg-white"
            >
              <div className="flex-shrink-0">
                <img
                  alt="product"
                  src={product.mainImageUrl}
                  className="w-full h-48 object-cover lg:h-72"
                />
              </div>
              <div className="flex-grow p-4 bg-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">"Descripción"</p>
                </div>
                <p className="font-semibold mt-2">
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
