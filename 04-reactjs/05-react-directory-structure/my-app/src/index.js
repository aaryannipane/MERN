import React from "react";
import ReactDom from "react-dom/client";
import {el, App} from "./App.js";

// render this element to dom by root element
// ReactDom.render(el, document.getElementById("root"));

// render react component from App.js file
// ReactDom.render(<App/>, document.getElementById("root"));



// react 18 method to createRoot and to render
// create root first 
const root = ReactDom.createRoot(document.getElementById("root"));

// render element to root 
root.render(<App/>);