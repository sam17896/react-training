import * as React from "react";
import * as ReactDOM from "react-dom";

// We can move the code into seperate components
// components are just function that return html elements
function SampleComponent() {
  return <h1>Hello World</h1>;
}

ReactDOM.render(<SampleComponent />, document.getElementById("root"));
