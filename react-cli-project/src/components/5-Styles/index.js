import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";

// in jsx elements props are camelCase because variable name cannot have '-' or other special characters in variable name
// class ->  className // because class is reserved keyword of es6
// for -> htmlFor // because for is reserved keyword of es6

function App() {
  return (
    <form className="todolist">
      <Header />
      <AddForm />
      <div className="box">
        <div className="subtitle">Things to get done:</div>
        <ul className="list">
          <li className="listElement">sadsd</li>
        </ul>
      </div>

      <div className="box">
        <div className="subtitle">Done:</div>
        <ul
          className="list"
          style={{
            color: "grey",
            textDecoration: "line-through",
          }}
        >
          <li className="listElement">sadsd</li>
        </ul>
      </div>
    </form>
  );
}

export default App;
