import * as React from "react";

// function AddForm() {
//   return (
//     <div className="box addItem">
//       <input className="listElement" name="add-item" placeholder="Add new" />
//       <button className="button">Add</button>
//     </div>
//   );
// }

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

function AddForm(props) {
  const [todoItem, setTodoItem] = React.useState("");
  return (
    <div className="box addItem">
      <input
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
        className="listElement"
        name="add-item"
        placeholder="Add new"
      />
      <button
        className="button"
        type="button"
        onClick={(e) => {
          props.onClick({
            id: guidGenerator(),
            title: todoItem,
            done: false,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddForm;
