import { themeReducer } from "./themeReducer";
import { counterReducer } from "./counterReducers";
import { statusReducer } from "./statusReducer";

export function appReducer(state = {}, action) {
  return {
    theme: themeReducer(state.theme, action),
    status: statusReducer(state.status, action),
    counter: counterReducer(state.counter, action),
  };
}
