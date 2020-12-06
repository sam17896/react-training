const INITIAL_STATE = {
  TODO_ITEMS: [],
  DONE_ITEMS: [],
};

function TodoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      return { ...state, TODO_ITEMS: action.payload };

    case "UPDATE_DONE":
      return { ...state, DONE_ITEMS: action.payload };

    default:
      return { ...state };
  }
}

export default TodoReducer;
