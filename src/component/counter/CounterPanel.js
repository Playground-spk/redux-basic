import React from "react";

function CounterPanel(props) {
  return (
    <div onClick={props.change} className="counter-panel">
      {props.label}
    </div>
  );
}

export default CounterPanel;
