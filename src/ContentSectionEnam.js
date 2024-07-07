import React from "react";
import story1 from "./Asset/Story/story1.png";
import story2 from "./Asset/Story/story2.png";

const ContentSectionEnam = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Our Newest Story</h2>
      <div className="text-right my-4">
        <a href="#" className="text-blue-500">
          See all stories
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="story-card">
          <img
            src={story1}
            alt="Story 1"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Story 1</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
        <div className="story-card">
          <img
            src={story2}
            alt="Story 2"
            className="w-full h-auto rounded-lg"
          />
          <div className="p-2">
            <h3 className="text-xl font-semibold">Story 2</h3>
            <p className="text-gray-600">14 Januari 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionEnam;
