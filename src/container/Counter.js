import React, { useState } from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterPanel from "../component/counter/CounterPanel";
import { connect } from "react-redux";
import CounterSave from "../component/counter/CounterSave";
import CounterNumberList from "../component/CounterNumberList";

function Counter(props) {
  return (
    <div>
      <CounterDisplay number={props.number} />
      <CounterPanel label="Increase" change={props.Increase} />
      <CounterPanel label="decrease" change={props.decrease} />
      <CounterPanel label="plus 5" change={props.plus} />
      <CounterSave />
      <CounterNumberList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Increase: () => dispatch({ type: "INCREASE" }),
    decrease: () => dispatch({ type: "DECREASE" }),
    plus: () => dispatch({ type: "PLUS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
