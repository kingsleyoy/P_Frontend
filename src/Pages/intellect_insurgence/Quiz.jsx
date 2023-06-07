import React from "react";
import "./Quiz.scss";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const Quiz = () => {
  const navigate = useNavigate();

  const HandleReturn = () => {
    navigate(-1);
  };

  const HandleStart = () => {
    navigate("page_two");
  };
  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        <div className="quiz-heading">
          <div className="quiz-bg">
            <h3>intellect insurgence</h3>
          </div>
        </div>

        <div className="quiz-div">
          <ul className="quiz-rules">
            <li>Each question carries 10 points</li>
            <li>
              Questions should be answered before given time for the question
              elapses
            </li>
            <li>Page shouldnt be refreshed while taking a quiz</li>
            <li>Best of luck</li>
          </ul>
        </div>

        <div className="quiz-btns">
          <button onClick={HandleReturn} className="quiz-back">
            <MdOutlineArrowBack size={20} />
          </button>
          <button className="quiz-start" onClick={HandleStart}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
