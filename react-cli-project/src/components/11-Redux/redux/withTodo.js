import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
const mapStateToProps = (state) => {
  return {
    TODO_ITEMS: state.todo.TODO_ITEMS,
    DONE_ITEMS: state.todo.DONE_ITEMS,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch),
});

const withTodo = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default withTodo;
