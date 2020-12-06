import * as React from "react";

function TodoList(props) {
  const h1 = props.done ? "Done List" : "Things to get done";
  const styles = props.done
    ? {
        color: "grey",
        textDecoration: "line-through",
      }
    : {};

  return (
    <div className="box">
      <div className="subtitle">{h1}:</div>
      <ul className={"list"} style={styles}>
        {props.items &&
          props.items.map((x) => {
            return (
              <li key={x.id} className="listElement">
                {x.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
