import * as React from "react";
import "./index.css";
import Header from "./Header";
import TodoList from "./TodoList";
import withTodo from "./redux/withTodo";

function DoneTodo(props) {
  const { DONE_ITEMS } = props;
  return (
    <form className="todolist">
      <Header />
      <TodoList items={DONE_ITEMS} done={true} />
    </form>
  );
}

export default withTodo(DoneTodo);
