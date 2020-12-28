import * as React from "react";
import "./index.css";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoContext from "./context";
import useFilter from "./useFilter";

function DoneTodo(props) {
  const { DoneItems } = React.useContext(TodoContext);
  const [filterList, setSearch, search] = useFilter(DoneItems, 'title');
  return (
    <form className="todolist">
      <Header />
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
      <TodoList items={filterList} done={true} />
    </form>
  );
}

export default DoneTodo;
