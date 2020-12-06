import * as React from "react";

function TodoList(props) {
  const h1 = props.done ? "Done List" : "Things to get done";
  const className = props.done ? "done" : "todo-list";
  const backgroundColor = props.done ? "red" : "green";
  return (
    <div className="box">
      <div className="subtitle">{h1}:</div>
      <ul className={`list ${className}`}>
        <li className="listElement" style={{ backgroundColor }}>
          sadsd
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
