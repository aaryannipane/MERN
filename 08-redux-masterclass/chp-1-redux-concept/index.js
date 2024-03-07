
// store (state, reducer, dispatch)   ---   action (not part of store)

import { createStore, applyMiddleware } from "redux";
// logger for logging changes in redux state
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// store  // middleware run on every dispatch action
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

// reducer
// logic on type of action
function reducer(prevState = { amount: 1 }, action) {
  switch (action.type) {
    case "init":
      // always return new object. don't modify same object "prevState"
      return { amount: action.payload };
    case "increment":
      return { amount: prevState.amount + 1 };
    case "decrement":
      return { amount: prevState.amount - 1 };
    case "incrementByAmount":
      return { amount: prevState.amount + action.payload };
    default:
      return prevState;
  }
}

// console.log(store.getState())

// dispatch to change value in store using reducer
// store.dispatch({type: "increment"})

// console.log(store.getState())

// async API call with thunk for dispatching after api call
async function init(dispatch, getState) {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  return { type: "init", payload:  data.payload};
}

// we are not calling init function we are passing it (using thunk)
store.dispatch(init);

// Action creators
function increment() {
  return { type: "increment" };
}
function decrement() {
  return { type: "decrement" };
}

// store.dispatch(increment());

// setInterval(() => {
//   store.dispatch({ type: "init", payload: 100 });
// }, 2000);
