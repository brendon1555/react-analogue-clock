import React, { useState } from 'react';

interface IState {
  seconds: number;
  minutes: number;
  hours: number;
}

const useTime = () => {
  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    let date = new Date();
    setState({
      hours: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });

    const tick = setInterval(() => {
      date = new Date();
      setState({
        hours: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return function cleanup() {
      clearInterval(tick);
    };
  }, [setState]);

  return state as IState;
};

export default useTime;
