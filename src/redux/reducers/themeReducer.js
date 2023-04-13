const initialState = "light";

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case "theme/light":
      return "light";
    case "theme/dark":
      return "dark";
    default:
      return state;
  }
}

export { initialState, themeReducer };
