import React from "react";
import Marquee from "react-fast-marquee";
import client1 from "./Asset/Clients/client1.png";
import client2 from "./Asset/Clients/client2.png";
import client3 from "./Asset/Clients/client3.png";
import client4 from "./Asset/Clients/client4.png";
import client5 from "./Asset/Clients/client5.png";
import client6 from "./Asset/Clients/client6.png";

//Marquee
const ContentSectionDua = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Client Trust</h2>
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center space-x-10">
          <img src={client1} alt="Client 1" className="h-32" />
          <img src={client2} alt="Client 2" className="h-32" />
          <img src={client3} alt="Client 3" className="h-32" />
          <img src={client4} alt="Client 4" className="h-32" />
          <img src={client5} alt="Client 5" className="h-32" />
          <img src={client6} alt="Client 6" className="h-32" />
          {/* Duplikat gambar klien untuk loop tanpa batas */}
          <img src={client1} alt="Client 1" className="h-32" />
          <img src={client2} alt="Client 2" className="h-32" />
          <img src={client3} alt="Client 3" className="h-32" />
          <img src={client4} alt="Client 4" className="h-32" />
          <img src={client5} alt="Client 5" className="h-32" />
          <img src={client6} alt="Client 6" className="h-32" />
        </div>
      </Marquee>
    </div>
  );
};

export default ContentSectionDua;
