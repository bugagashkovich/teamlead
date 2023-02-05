import initialState from "../initialState";

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case "todos/todosLoaded":
      let todos = action.payload.map((t) => {
        return { key: t.key, id: t.id, check: false, name: t.fields.summary };
      });
      return todos;
    case "todos/clear":
      return [];
    case "todos/check":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, check: !todo.check };
      });
    case "todos/delete":
      return state.filter((todo) => {
        return todo.id != action.payload;
      });
    default:
      return state;
  }
}
