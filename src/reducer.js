const initialValue = {
  counting: 100,
};

const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counting: state.counting + action.value };
    case actionTypes.DECREMENT:
      return { ...state, counting: state.counting - action.value };

    case actionTypes.RESET:
      return initialValue;
  }

  // if (action.type === "increment") {
  //   return { ...state, counting: state.counting + action.value };
  // }
  // if (action.type === "decrement") {
  //   return { ...state, counting: state.counting - action.value };
  // }
  // if (action.type === "reset") {
  //   return initialValue;
  // }
  // return state;
};

export { initialValue, reducer };
