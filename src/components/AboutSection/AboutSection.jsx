import React from "react";
import "./AboutSection.scss";
import Chess from "../../Assets/chess.jpg";
import { Typewriter } from "react-simple-typewriter";

const AboutSection = () => {
  return (
    <div className="aboutSect-container" id="about">
      <div className="aboutSect-wrapper">
        <h4>ABOUT</h4>
        <p className="about-info">
          Funlog is one of many websites developed by Kingsley Oyeoka to help
          fight depression and boredom.
        </p>
        <div className="about-grid">
          <div className="img-column">
            <img src={Chess} alt="chess" />
          </div>
          <div className="text-column">
            <h3>KINGSLEY .K. OYEOKA </h3>
            <p>Fullstack MERN developer</p>
            <p>
              Best Technologies: {""}
              <span className="typewriter">
                <Typewriter
                  words={[
                    "React",
                    "Express",
                    "Mongodb",
                    "Node",
                    "React Express Mongodb Node",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  //   onLoopDone={handleDone}
                  //   onType={handleType}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
