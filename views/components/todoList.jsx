import React from "react";
import Todo from "./todo";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store/store";

const allTodos = (state) =>
  state.todos.sort(function (a, b) {
    if (a.check > b.check) {
      return 1;
    }
    if (a.check < b.check) {
      return -1;
    }
    return 0;
  });

const checkedTodos = (state) =>
  state.todos.filter((todo) => {
    console.log(todo);
    return todo.check === true;
  });

const check = (state) => state.ui.sortCheck;

export default function TodoList() {
  const isChecked = useSelector(check);
  const todos = useSelector(isChecked ? checkedTodos : allTodos);

  const list = todos
    ? todos.map((todo) => {
        return (
          <Todo
            key={todo.key}
            name={todo.name}
            id={todo.id}
            check={todo.check}
          />
        );
      })
    : null;

  return (
    <div
      style={{
        backgroundColor: "#f5f6f7",
        width: "25%",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
        visibility: todos.length ? "visible" : "hidden",
      }}
    >
      {list}
    </div>
  );
}
