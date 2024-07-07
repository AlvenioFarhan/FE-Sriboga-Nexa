import React from "react";
import Navbar from "./Navbar";
import Popup from "./Popup";
import ChatButton from "./ChatButton";
import CarouselComponent from "./Carousel";
import ContentSectionSatu from "./ContentSectionSatu";
import ContentSectionDua from "./ContentSectionDua";
import ContentSectionTiga from "./ContentSectionTiga";
import ContentSectionEmpat from "./ContentSectionEmpat";
import ContentSectionLima from "./ContentSectionLima";
import ContentSectionEnam from "./ContentSectionEnam";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <ContentSectionSatu />
      <ContentSectionDua />
      <ContentSectionTiga />
      <ContentSectionEmpat />
      <ContentSectionLima />
      <ContentSectionEnam />
      <Popup />
      <ChatButton />
      <Footer />
    </div>
  );
};

export default App;
