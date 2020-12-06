import * as React from "react";
import * as ReactDOM from "react-dom";
import { MyInfo } from "./components/MyInfo";

// Here we render some html elements
// its not technically html but jsx
// there can be one root jsx elements if you want two elements just wrap it in one div

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// We can move the code into seperate components
// components are just function that return html elements
function SampleComponent() {
  return <h1>Hello World</h1>;
}

// ReactDOM.render(<SampleComponent />, document.getElementById("root"));

// You can move the components in seperate files to keep the files clean and maintainable
ReactDOM.render(<MyInfo />, document.getElementById("root"));
