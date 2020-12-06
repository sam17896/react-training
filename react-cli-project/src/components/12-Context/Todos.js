import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoContext from "./context";

function Todos(props) {
  const { TodoItems, SetTodoItems } = React.useContext(TodoContext);

  function onClick(item) {
    //  update state;
    // this.setState({
    //   TodoItems: [item, ...this.state.TodoItems],
    // });

    SetTodoItems([item, ...TodoItems]);
  }

  return (
    <form className="todolist">
      <Header />
      <AddForm {...{ onClick }} />
      <TodoList items={TodoItems} />
    </form>
  );
}

export default Todos;
