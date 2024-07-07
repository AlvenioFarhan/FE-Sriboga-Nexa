import React, { useState } from "react";
import popup from "./Asset/sribogaLogo.png";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        style={{ pointerEvents: showPopup ? "auto" : "none" }}
      ></div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>
        <img src={popup} alt="Popup" />
      </div>
    </div>
  );
};

export default Popup;
