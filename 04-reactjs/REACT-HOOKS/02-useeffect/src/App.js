import { useEffect, useState } from "react";

function App() {
  const [resourceType, setResource] = useState("posts");
  const [items, setItems] = useState([]);

  // this useEffect run at every render 
  // (The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.)

  // useEffect run before state changes to different value **
  // setState -> useEffect -> value changed **
  useEffect(() => {
    // runs before every return 
    console.log("render");
  });

  // this runs when the dependency value changed
  useEffect(() => {
    console.log("resourceType changed");

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  // runs onMount (first render)
  useEffect(() => {
    // runs before return
    console.log("onMount");
  }, []);

  return (
    <>
    {console.log("inside return")}
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
