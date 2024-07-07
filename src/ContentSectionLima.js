import React from "react";
import Slider from "react-slick";
import class1 from "./Asset/BakingClass/class1.png";
import class2 from "./Asset/BakingClass/class2.png";
import class3 from "./Asset/BakingClass/class3.png";
import class4 from "./Asset/BakingClass/class4.png";
import class5 from "./Asset/BakingClass/class5.png";
import class6 from "./Asset/BakingClass/class6.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentSectionLima = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Baking Class & Demo</h2>
      <Slider {...settings}>
        <div className="story-card p-2">
          <img
            src={class1}
            alt="Baking Demo Surabaya"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">
              Baking Demo Surabaya, Come & join us!
            </h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={class2}
            alt="Content 2"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Content 2</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={class3}
            alt="Content 3"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Content 3</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={class4}
            alt="Content 4"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Content 4</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={class5}
            alt="Content 5"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Content 5</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card p-2">
          <img
            src={class6}
            alt="Content 6"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Content 6</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
};

export default ContentSectionLima;
