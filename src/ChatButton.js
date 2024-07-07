import React, { useState } from "react";
import chatButton from "./Asset/chatButton.png";

const ChatButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-40"
      >
        <img src={chatButton} alt="Chat Icon" className="w-8 h-8" />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-end justify-end p-4 z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            data-aos="fade-in"
            data-aos-duration="500"
            onClick={handleCloseModal}
          ></div>
          <div
            className="bg-white w-80 p-4 rounded-lg shadow-lg relative z-10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="bg-blue-600 p-2 rounded-t-lg text-white text-lg font-semibold">
              Terhubunglah dengan kami
              <button
                className="absolute top-2 right-2 text-white"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 mt-2">
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
              <div className="bg-gray-200 h-8 rounded"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
