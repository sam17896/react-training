import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Todos from "./Todos";
import DoneTodo from "./DoneTodos";
import withTodo from "./redux/withTodo";

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

function App(props) {
  React.useEffect(() => {
    let current = true;
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((res) => {
        if (current) {
          props.UpdateTodoItems(res.filter((x) => !x.completed));
          props.UpdateDoneItems(res.filter((x) => x.completed));
          //  this.setState({
          //    TodoItems: res.filter((x) => !x.completed),
          //    DoneItems: res.filter((x) => x.completed),
          //  });
        }
      });

    return () => {
      current = false;
    };
  }, []);
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todo-list" component={Todos} />
      <Route exact path="/todo-done" component={DoneTodo} />
    </Router>
  );
}

export default withTodo(App);
