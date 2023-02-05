import { combineReducers } from "redux";

import todosReducer from "./todoReduecer";
import projectReducer from "./projectReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  projects: projectReducer,
  ui: uiReducer,
});

export default rootReducer;
