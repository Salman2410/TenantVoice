import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/house_1.webp";
import img2 from "../assets/house_2.webp";
import img3 from "../assets/house_3.webp";
import img4 from "../assets/house_4.webp";

const ImageGallery = () => {
  return (
    <div className="max-w-full mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        className="carousel-wrapper"
      >
        <div>
          <img src={img1} alt="Room 1" className="rounded-lg" />
        </div>
        <div>
          <img src={img2} alt="Room 2" className="rounded-lg" />
        </div>
        <div>
          <img src={img3} alt="Room 3" className="rounded-lg" />
        </div>
        <div>
          <img src={img4} alt="Room 4" className="rounded-lg" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageGallery;
