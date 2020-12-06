const UpdateTodoItems = (todos) => {
  return {
    type: "UPDATE_TODO",
    payload: todos,
  };
};

const UpdateDoneItems = (todos) => {
  return {
    type: "UPDATE_DONE",
    payload: todos,
  };
};

export { UpdateTodoItems, UpdateDoneItems };
