import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";
import useTodo from "./useTodos";

function Todos() {
  const {
    TodoItems,
    DoneItems,
    itemsPerPage,
    setItemsPerPage,
    SetTodoItems,
  } = useTodo();

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
      <select
        value={itemsPerPage}
        onChange={(event) => {
          setItemsPerPage(event.target.value);
        }}
      >
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
      <TodoList items={TodoItems} />
      <TodoList items={DoneItems} done={true} />
    </form>
  );
}

export default Todos;
