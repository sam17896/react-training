import * as React from "react";
import "./index.css";
import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";
// const todos = [
//   {
//     id: 1,
//     title: "task 1",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "task 2",
//     done: false,
//   },
//   {
//     id: 3,
//     title: "task 3",
//     done: true,
//   },
// ];
class App extends React.Component {
  constructor(props) {
    super(props);

    // Static Variable and Props
    // this.TodoItems = todos.filter((x) => !x.done);
    // this.DoneItems = todos.filter((x) => x.done);

    this.state = {
      TodoItems: [],
      DoneItems: [],
      itemsPerPage: 10,
    };

    // We need to bind the 'this' context of this class, because the funtion is called fro other context
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.current = true;
    this.loadTodo();
  }

  loadTodo() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((res) => {
        if (this.current) {
          this.setState({
            TodoItems: res
              .filter((x) => !x.completed)
              .splice(0, this.state.itemsPerPage),
            DoneItems: res
              .filter((x) => x.completed)
              .splice(0, this.state.itemsPerPage),
          });
        }
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.itemsPerPage !== this.state.itemsPerPage) {
      this.loadTodo();
    }
  }

  componentWillUnmount() {
    this.current = false;
  }

  onClick(item) {
    // update state;
    this.setState({
      TodoItems: [item, ...this.state.TodoItems],
    });
  }

  render() {
    const { TodoItems, DoneItems, itemsPerPage } = this.state;
    return (
      <form className="todolist">
        <Header />
        <AddForm {...{ onClick: this.onClick }} />
        <select
          value={itemsPerPage}
          onChange={(event) => {
            this.setState({ itemsPerPage: event.target.value });
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
}

export default App;
