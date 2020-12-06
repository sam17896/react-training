import * as React from "react";
function useTodo() {
  const [TodoItems, SetTodoItems] = React.useState([]);
  const [DoneItems, SetDoneItems] = React.useState([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  React.useEffect(() => {
    let current = true;
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((res) => {
        if (current) {
          SetTodoItems(res.filter((x) => !x.completed).splice(0, itemsPerPage));
          SetDoneItems(res.filter((x) => x.completed).splice(0, itemsPerPage));
          //  this.setState({
          //    TodoItems: res.filter((x) => !x.completed),
          //    DoneItems: res.filter((x) => x.completed),
          //  });
        }
      });

    return () => {
      current = false;
    };
  }, [itemsPerPage]);

  return {
    TodoItems,
    DoneItems,
    itemsPerPage,
    setItemsPerPage,
    SetTodoItems,
    SetDoneItems,
  };
}

export default useTodo;
