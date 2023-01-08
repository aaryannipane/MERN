import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // after attaching event listener we have to remove it when component unmounts from view
    // we use clean up function for this
    // every time when useEffect run the cleanup function of previous effect runs first
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}

export default App;
