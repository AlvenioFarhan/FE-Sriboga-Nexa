import React from "react";
import sribogaLogo from "./Asset/sribogaLogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-16 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
              <div>
                <h3 className="font-bold mb-2 text-center md:text-left">
                  Tentang Kami
                </h3>
                <ul className="text-center md:text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Produk
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Inspirasi Baking
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-center md:text-left">
                  Baking & Consulting
                </h3>
                <ul className="text-center md:text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Pemberdayaan UKM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Acara
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-center md:text-left">
                  Hubungi Kami
                </h3>
                <ul className="text-center md:text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row my-4">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="Customer Care"
                className="h-8 mr-2"
              />
              <div className="text-center md:text-left">
                <span>Customer Care</span>
                <p className="font-bold text-lg">0-800-140-1109</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center">
              <img src={sribogaLogo} alt="Sriboga Logo" className="mb-4 h-12" />
              <h3 className="mb-2 text-center md:text-left">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:underline">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                    alt="Instagram"
                    className="h-6"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                    alt="Facebook"
                    className="h-6"
                  />
                </a>
                <a href="#" className="hover:underline">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/xbox-x.png"
                    alt="X"
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            <p className="text-sm text-center md:text-left">
              &copy; 2024 Develop by NEXA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
