import { createStore } from "redux";

const INITIAL = { counter: 0 };
const reducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default createStore(reducer);
