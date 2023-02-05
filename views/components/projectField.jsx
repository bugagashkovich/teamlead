import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Select from "@atlaskit/select";
import store from "../../store/store";

const selectProjects = (state) => state.projects;

export default function ProjectField() {
  // Для асинхронных запросов следует использовать redux-thunk, но столкнулся с проблемами. См projectReducer
  useEffect(() => {
    AP.context.getToken(function (res) {
      fetch("/api/projectList", {
        headers: {
          Authorization: "JWT " + res,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((jsonRes) => {
          store.dispatch({ type: "projects/projectsLoaded", payload: jsonRes });
        });
    });
  }, []);

  const projects = useSelector(selectProjects);

  // Для асинхронных запросов следует использовать redux-thunk, но столкнулся с проблемами. См projectReducer
  const handleChange = (e) => {
    if (e == null) {
      store.dispatch({ type: "todos/clear", payload: [] });
      return null;
    }

    AP.context.getToken(function (res) {
      fetch("/api/todoList?" + new URLSearchParams({ project: e.key }), {
        headers: {
          Authorization: "JWT " + res,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((jsonRes) => {
          store.dispatch({
            type: "todos/todosLoaded",
            payload: jsonRes.issues,
          });
        });
    });
  };

  return (
    <div
      style={{
        width: "25%",
        marginBottom: "15px",
      }}
    >
      <Select
        onChange={handleChange}
        inputId="single-select-example"
        className="single-select"
        classNamePrefix="react-select"
        isClearable={true}
        options={projects}
        placeholder="Выберете проект"
      />
    </div>
  );
}
