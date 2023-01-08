import { useEffect, useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // when state changes then entire component gets re render
  // when dark state changes slowFunction gets run that is of no use and it takes much time to solve this issue we use useMemo
  // useMemo is use to cache the value. if the value of number state changes then only it will call slowFunction

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // objects are referencial in javascript (value vs reference)
  // when the component re render themestyle object is created with new refernce so useEffect with themeStyle dependency is called whenever any state changes in component that causes new creation of object cause object are compared based on there reference value and useEffect will compare previous object refernece value with new one
  // to tackle this we can use useMemo with dependency dark state
  // so when dark state is changed than only new object will be created
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(number) {
  console.log("calling slow function");
  for (let i = 0; i < 2000000000; i++) {}
  return number * 2;
}

export default App;
