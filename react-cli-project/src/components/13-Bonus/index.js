import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Todos from "./Todos";
import DoneTodo from "./DoneTodos";
import useTodo from "../10-Routing/useTodos";
import TodoContext from "./context";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Nav() {
  return (
    <ul>
      <Link to="/">Home | </Link>
      <Link to="/about">About | </Link>
      <Link to="/todo-list">Todo List | </Link>
      <Link to="/todo-done">Todo Done</Link>
    </ul>
  );
}

function App() {
  const {
    TodoItems,
    DoneItems,
    itemsPerPage,
    setItemsPerPage,
    SetTodoItems,
  } = useTodo();

  return (
    <Router>
      <TodoContext.Provider
        value={{
          TodoItems,
          DoneItems,
          itemsPerPage,
          setItemsPerPage,
          SetTodoItems,
        }}
      >
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/todo-list" component={Todos} />
        <Route exact path="/todo-done" component={DoneTodo} />
      </TodoContext.Provider>
    </Router>
  );
}

export default App;
