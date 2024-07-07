import React from "react";
import contentSatu from "./Asset/contentSatu.jpg";

const ContentSectionSatu = () => {
  return (
    <div className="container mx-auto my-8 p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Pioneer in Flour Innovation</h2>
        <p className="mb-4">
          PT. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011 berubah
          menjadi PT. Sriboga Flour Mill sebagai pelopor Produsen Tepung Terigu
          yang memiliki gizi tinggi di Indonesia.
        </p>
        <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300">
          Learn more
        </button>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src={contentSatu}
          alt="Sriboga Flour Mill"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ContentSectionSatu;
