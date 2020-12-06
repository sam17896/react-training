import * as React from "react";
import "./index.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoContext from "./context";

function DoneTodo(props) {
  const { DoneItems } = React.useContext(TodoContext);
  return (
    <form className="todolist">
      <Header />
      <TodoList items={DoneItems} done={true} />
    </form>
  );
}

export default DoneTodo;
