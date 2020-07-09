import React from "react";

import { connect } from "react-redux";

function CounterNumberList(props) {
  return (
    <div>
      <ol>
        {props.numList.map((number) => (
          <li>{number}</li>
        ))}
      </ol>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numList: state.numberList,
  };
};

export default connect(mapStateToProps, null)(CounterNumberList);
