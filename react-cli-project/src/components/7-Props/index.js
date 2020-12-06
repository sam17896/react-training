import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";

const todos = [
  {
    id: 1,
    title: "task 1",
    done: false,
  },
  {
    id: 2,
    title: "task 2",
    done: false,
  },
  {
    id: 3,
    title: "task 3",
    done: true,
  },
];

function App() {
  const TodoItems = todos.filter((x) => !x.done);
  const DoneItems = todos.filter((x) => x.done);
  return (
    <form className="todolist">
      <Header />
      <AddForm />
      <TodoList items={TodoItems} />
      <TodoList items={DoneItems} done={true} />
    </form>
  );
}

export default App;
