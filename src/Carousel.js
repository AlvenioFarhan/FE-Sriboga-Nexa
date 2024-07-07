import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "./Asset/Carousel/carousel1.png";
import carousel2 from "./Asset/Carousel/carousel2.png";
import carousel3 from "./Asset/Carousel/carousel3.png";
import carousel4 from "./Asset/Carousel/carousel4.png";
import carousel5 from "./Asset/Carousel/carousel5.png";

const CarouselComponent = () => {
  return (
    <div className="w-full">
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        <div className="relative">
          <img src={carousel1} alt="Slide 1" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={carousel2} alt="Slide 2" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={carousel3} alt="Slide 3" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={carousel4} alt="Slide 4" className="w-full h-auto" />
        </div>
        <div className="relative">
          <img src={carousel5} alt="Slide 5" className="w-full h-auto" />
        </div>
        {/* Tambahkan slide tambahan sesuai kebutuhan */}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
