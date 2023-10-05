import React, { useContext } from "react";
import { CounterContext } from "../contexts/counterContext";
import { useToggle } from "../hooks/useToggle";

export default function Counter() {
  let { count, increase, decrease } = useContext(CounterContext);

  let [show, toggle] = useToggle();

  return (
    <div className="bg-light p-5 text-center ">
      <h2>Counter Component</h2>
      <button className="btn btn-dark text-white" onClick={toggle}>
        Toggle
      </button>
      {show && (
        <p className="bg-dark text-white m-5 p-2 w-50 mx-auto">
          Text to be toggled
        </p>
      )}
      <p>Count: {count}</p>
      <button onClick={increase} className="btn btn-danger mx-1">
        Increase
      </button>
      <button onClick={decrease} className="btn btn-success mx-1">
        Decrease
      </button>
    </div>
  );
}
