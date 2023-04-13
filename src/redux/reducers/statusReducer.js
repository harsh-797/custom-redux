const initialState = "pending";

function statusReducer(state = initialState, action) {
  switch (action.type) {
    case "status/pending":
      return "pending";
    case "status/resolved":
      return "resolved";
    default:
      return state;
  }
}

export { initialState, statusReducer };
