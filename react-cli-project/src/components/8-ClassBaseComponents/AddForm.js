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

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: "",
    };
  }

  render() {
    return (
      <div className="box addItem">
        <input
          value={this.state.todoItem}
          onChange={(event) => {
            this.setState({ todoItem: event.target.value });
          }}
          className="listElement"
          name="add-item"
          placeholder="Add new"
        />
        <button
          className="button"
          type="button"
          onClick={(e) => {
            this.props.onClick({
              id: guidGenerator(),
              title: this.state.todoItem,
              done: false,
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddForm;
