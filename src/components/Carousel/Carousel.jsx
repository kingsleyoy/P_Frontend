import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "Carousel.scss";

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="image1.jpg" alt="Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Carousel;
