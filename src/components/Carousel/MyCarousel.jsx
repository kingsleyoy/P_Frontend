import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chess from "../../Assets/chess.jpg";
import ludo from "../../Assets/ludo.jpg";
import dice from "../../Assets/dice.jpg";
import "./MyCarousel.scss";

const MyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
    >
      <div className="slide-div">
        <img src={chess} alt=" chess pic" />
        <div className="slide-text">
          <p>Digital Fun</p>
          <p>Center</p>
        </div>
      </div>
      <div className="slide-div">
        <img src={ludo} alt="ludo pic" />
        <div className="slide-text">
          <p>Never Get Bored</p>
        </div>
      </div>
      <div className="slide-div">
        <img src={dice} alt="dice pic" />
        <div className="slide-text">
          <p>Have Fun</p>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
