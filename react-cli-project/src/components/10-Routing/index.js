import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Todos from "./Todos";

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
      <Link to="/todo-list">Todo List</Link>
    </ul>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todo-list" component={Todos} />
    </Router>
  );
}
