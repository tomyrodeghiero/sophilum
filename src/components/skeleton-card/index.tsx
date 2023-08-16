import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative transition-transform duration-300 ease-in-out transform">
      <div className="relative">
        {/* Image */}
        <div className="h-48 lg:h-96 w-full object-cover bg-gray-400 animate-pulse" />

        {/* Product label */}
        <div className="product-tag bg-gray-300 py-3 px-4 opacity-60 flex items-center justify-center animate-pulse">
          <div className="h-5 w-5 bg-gray-400 mr-2" />
          <div className="h-4 w-24 bg-gray-400" />
        </div>
      </div>

      <div className="p-4 pb-5 bg-gray-100">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-300 animate-pulse" />

        {/* Description */}
        <div className="mt-2 h-4 w-1/2 bg-gray-300 animate-pulse" />

        {/* Price */}
        <div className="mt-2 h-4 w-1/4 bg-gray-300 animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonCard;
