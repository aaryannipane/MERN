import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App/>);

root.render(<App>This text will go in props.children {100+25} </App>);