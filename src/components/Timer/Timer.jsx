import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const { sec, func } = props;
  const [timer, setTimer] = useState({ sec });
  const handleTimer = setInterval(() => {
    setTimer(timer - 1);
    if (timer === 0) {
      clearInterval(Timer);
      func();
    }
  }, 1000);

  useEffect(() => {
    handleTimer();
  }, []);
  return <div>{timer}</div>;
};

export default Timer;
