import React from "react";
import { useParams } from "react-router-dom";
import fail from "../../Assets/sad.png";
import congrats from "../../Assets/smile.png";
import { Link } from "react-router-dom";
import "./Qresult.scss";

const Qresult = () => {
  const score = useParams().score;
  console.log(score);
  return (
    <div className="qresult-container">
      <div className="qresult-wrapper">
        {score < 50 && (
          <div className="qresult-fail">
            <img src={fail} alt="failure" />
            <h4>Study Harder</h4>
            <h3>
              <span>{score}</span>/100
            </h3>
          </div>
        )}
        {score >= 50 && (
          <div className="qresult-pass">
            <img src={congrats} alt="pass" />
            <h4>Congratulations!!!</h4>
            <h3>
              <span>{score}</span>/100
            </h3>
          </div>
        )}

        <div className="qresult-options">
          <Link to="/intellect_insurgence">New Game</Link>
          <Link to="/">Exit</Link>
        </div>
      </div>
    </div>
  );
};

export default Qresult;
