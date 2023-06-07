import React, { useEffect, useState } from "react";
import "./QpageTwo.scss";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QpageTwo = () => {
  const [question, setQuestion] = useState();
  const [option, setOptions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  const widthNumber = count * 10;
  const style = {
    width: `${widthNumber}%`,
    height: "2px",
    backgroundColor: "green",
  };
  const getQuiz = async () => {
    setIsLoading(true);
    // const url = "https://opentdb.com/api.php?amount=10&encode=url3986";
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOptions(generateOptionAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const generateOptionAndShuffle = (_question) => {
    const options = [_question.correct_answer, ..._question.incorrect_answers];

    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === question[count].correct_answer) {
      setScore(score + 10);
    }

    if (count !== 9) {
      setCount(count + 1);
      console.log(_option === question[count].correct_answer);
      setOptions(generateOptionAndShuffle(question[count + 1]));
    }
  };

  const handleNextPress = () => {
    setCount(count + 1);
    setOptions(generateOptionAndShuffle(question[count + 1]));
  };

  return (
    <div className="pagetwo-container">
      <div className="pagetwo-wrapper">
        {isloading ? (
          <div className="pagetwo-spinner">
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          question && (
            <div className="pagetwo-content">
              <div className="pagetwo-header">
                <h2>INTELLECT INSURGENCE</h2>
                <div>
                  <span>{count + 1}/10</span>
                </div>

                <div style={style}></div>
              </div>
              <h3 className="pagetwo-heading">
                Q{count + 1}. {decodeURIComponent(question[count].question)}
              </h3>
              <ol type="A">
                <li>
                  <button onClick={() => handleSelectedOption(option[0])}>
                    {decodeURIComponent(option[0])}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectedOption(option[1])}>
                    {decodeURIComponent(option[1])}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectedOption(option[2])}>
                    {decodeURIComponent(option[2])}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSelectedOption(option[3])}>
                    {decodeURIComponent(option[3])}
                  </button>
                </li>
              </ol>

              {count !== 9 && (
                <div className="pagetwo-next">
                  <button onClick={handleNextPress}>NEXT QUESTION</button>
                </div>
              )}

              {count === 9 && (
                <div className="pagetwo-showresult">
                  <Link to={`pagetwo/result/${score}`}>Show result</Link>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QpageTwo;
