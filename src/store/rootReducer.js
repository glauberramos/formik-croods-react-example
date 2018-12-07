import { combineReducers } from "redux";
import { createReducer } from "croods";

const reducers = {
  todos: createReducer("todos")
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
