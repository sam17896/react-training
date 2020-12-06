import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";
import withTodo from "./redux/withTodo";

function Todos(props) {
  const { UpdateTodoItems, TODO_ITEMS } = props;

  function onClick(item) {
    //  update state;
    // this.setState({
    //   TodoItems: [item, ...this.state.TodoItems],
    // });

    UpdateTodoItems([item, ...TODO_ITEMS]);
  }

  return (
    <form className="todolist">
      <Header />
      <AddForm {...{ onClick }} />
      <TodoList items={TODO_ITEMS} />
    </form>
  );
}

export default withTodo(Todos);
