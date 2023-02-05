import initialState from "../initialState";

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case "ui/sortChecked":
      return { ...state, sortCheck: !state.sortCheck };
    default:
      return state;
  }
}
