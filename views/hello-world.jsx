import React from "react";

import ProjectField from "./components/projectField";
import TodoList from "./components/todoList";
import ProgressBar from "@atlaskit/progress-bar";

import { Provider } from "react-redux";
import store from "../store/store";
import Settings from "./components/settings";

export default function HelloWorld() {
  return (
    <Provider store={store}>
      <div
        style={{
          backgroundColor: "#2168c6",
          width: "100%",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <ProjectField />
        <Settings />
        <TodoList />
      </div>
    </Provider>
  );
}
