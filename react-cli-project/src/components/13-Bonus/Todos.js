import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoContext from "./context";
import useFilter from "./useFilter";

function Todos(props) {
  const { TodoItems, SetTodoItems } = React.useContext(TodoContext);
  const [filterList, setSearch, search] = useFilter(TodoItems, 'title')

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
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <TodoList items={filterList} />
    </form>
  );
}

export default Todos;
