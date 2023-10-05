import React, { useState } from "react";
import { CounterContext } from "./counterContext";

export function CounterProvider(props) {
  let [count, setCounter] = useState(0);

  let increase = () => {
    setCounter(count + 1);
  };

  let decrease = () => {
    if (count > 0) setCounter(count - 1);
  };

  let counter = {
    count,
    increase,
    decrease,
  };

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
}
