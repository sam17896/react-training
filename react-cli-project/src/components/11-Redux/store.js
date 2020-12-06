import { combineReducers, createStore } from "redux";
import todo from "./redux/reducer";

const store = createStore(combineReducers({ todo }));

export default store;
