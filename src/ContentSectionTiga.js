import React from "react";
import ProductCard from "./ProductCard";
import product1 from "./Asset/Products/product1.png";
import product1Hover from "./Asset/Products/product1Hover.png";
import product2 from "./Asset/Products/product2.png";
import product2Hover from "./Asset/Products/product2Hover.png";
import product3 from "./Asset/Products/product3.png";
import product3Hover from "./Asset/Products/product3Hover.png";
import product4 from "./Asset/Products/product4.png";
import product4Hover from "./Asset/Products/product4Hover.png";

const products = [
  {
    name: "Tepung Terigu Double Zero",
    image: product1,
    hoverImage: product1Hover,
  },
  {
    name: "Tepung Terigu Double Zero",
    image: product2,
    hoverImage: product2Hover,
  },
  {
    name: "Tepung Terigu Beruang Biru",
    image: product3,
    hoverImage: product3Hover,
  },
  {
    name: "Tepung Terigu Yokozuna",
    image: product4,
    hoverImage: product4Hover,
  },
];

const ContentSectionTiga = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Superior Product
      </h2>
      <div className="flex justify-between items-center mb-4">
        <span></span>
        <a href="#" className="text-blue-600">
          See all products
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ContentSectionTiga;
