import * as React from "react";

function AddForm() {
  return (
    <div className="box addItem">
      <input className="listElement" name="add-item" placeholder="Add new" />
      <button className="button">Add</button>
    </div>
  );
}

export default AddForm;
