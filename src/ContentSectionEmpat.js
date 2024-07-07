import React from "react";
import backgroundVideo from "./Asset/Video/video1.mp4";
import bakingLogo from "./Asset/bakingLogo.png";

const ContentSectionEmpat = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          From us to your favorite dish
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We’re passionate about feeding the ones we love delicious dishes made
          from the highest quality ingredients. Get inspired for your next meal
          or baking project by browsing through our library of original recipes
          featuring our ancient and heritage grains.
        </p>
        <button className="px-6 py-3 bg-transparent border border-white text-white rounded hover:bg-white hover:text-blue-600 transition duration-300">
          Discover recipes
        </button>
        <img
          src={bakingLogo}
          alt="Inspirasi Baking Logo"
          className="mt-8 h-12"
        />
      </div>
    </div>
  );
};

export default ContentSectionEmpat;
