import React, { useState } from "react";

function App() {
  // useState function runs each time when we update value. to avoid this we can pass a arrow function in it with return value
  const [count, setCount] = useState(0);

  function decrementCount() {
    // update state
    // after updating state return statement will run always
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    // update state
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      {/* show state */}
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
