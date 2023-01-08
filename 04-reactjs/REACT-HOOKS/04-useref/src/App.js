import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");

  // useRef is similar to States but it does not re render component when value changes
  const renderCount = useRef(1);

  // it is also used to persist value between renders
  const inputRef = useRef();

  const prevName = useRef("");

  useEffect(() => {
    // if we use setState in useEffect it will cause infinite loop cause it will re render component
    // to solve that issue we use useRef
    renderCount.current = renderCount.current + 1;
  });

  // can store previous value of state
  useEffect(() => {
    prevName.current = name;
    console.log(name);
  }, [name]);

  return (
    <div>
      {/* useRef can also be use to give reference to html component */}
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <p>
        my name is <b>{name}</b> and it used to be <b>{prevName.current}</b>
      </p>
      <p>I rendered {renderCount.current} times</p>
    </div>
  );
}

export default App;
