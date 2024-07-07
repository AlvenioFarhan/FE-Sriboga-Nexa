import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full transition-opacity duration-1000 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <h3 className="text-center text-lg mt-4">{product.name}</h3>
      <button className="block mx-auto mt-4 px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
        See Product
      </button>
    </div>
  );
};

export default ProductCard;
