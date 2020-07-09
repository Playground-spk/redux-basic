import React from "react";

import { connect } from "react-redux";

function CounterSave(props) {
  return (
    <div className="counter-save" onClick={props.onClickSave}>
      save
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSave: () => dispatch({ type: "SAVE" }),
  };
};

export default connect(null, mapDispatchToProps)(CounterSave);
