import initialState from "../initialState";
import fetch from "node-fetch";

export default function projectReducer(state = initialState.projects, action) {
  switch (action.type) {
    case "projects/projectsLoaded": {
      let projects = action.payload.map((p) => {
        return { id: p.id, key: p.key, label: p.name };
      });
      return projects;
    }
    default:
      return state;
  }
}

// При попытке получить проекты с помощью Redux-Thunk и AP получена следующая ошибка:
// ReferenceError: AP is not defined
// Как инициализировать AP для корректной работы асинхронных запросов вне vies не нашел.
// Хранить jwt в store счел не очень здравой идеей.

export function getProjects(dispatch, getState) {
  AP.context.getToken(function (res) {
    fetch("/api/projectList", {
      headers: {
        Authorization: "JWT " + res,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        dispatch({ type: "projects/projectsLoaded", payload: jsonRes });
      });
  });
}
