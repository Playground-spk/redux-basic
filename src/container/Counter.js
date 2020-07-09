import React, { useState } from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterPanel from "../component/counter/CounterPanel";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleNumber = (type, count) => {
    switch (type) {
      case "Increase":
        setNumber(number + 1);

        break;

      case "decrease":
        setNumber(number - 1);
        break;

      case "plus":
        setNumber(number + count);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <CounterDisplay number={number} />
      <CounterPanel label="Increase" change={() => handleNumber("Increase")} />
      <CounterPanel label="decrease" change={() => handleNumber("decrease")} />
      <CounterPanel label="decrease" change={() => handleNumber("plus", 5)} />
    </div>
  );
}

export default Counter;
