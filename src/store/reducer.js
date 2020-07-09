const initialState = {
  number: 0,
  numberList: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREASE") {
    return {
      ...state,
      number: state.number + 1,
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      number: state.number - 1,
    };
  }

  if (action.type === "PLUS") {
    return {
      ...state,
      number: state.number + 5,
    };
  }

  if (action.type === "SAVE") {
    return {
      ...state,
      numberList: [...state.numberList, state.number],
      number: 0,
    };
  }

  return state;
};

export default reducer;
