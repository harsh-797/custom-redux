import React from "react";

import { appReducer } from "./reducers/appReducer";
import { Context } from "./Provider";

export function createStore() {
  let store = {};

  function dispatch(action) {
    store = appReducer(store, action);
  }
  function getState() {
    return store;
  }

  return { store, dispatch, getState };
}

export function useSelector(selector) {
  const [, forceRerender] = React.useReducer((s) => s + 1, 0);

  const { getState, subscribe } = React.useContext(Context);

  const selectorRef = React.useRef(selector);
  selectorRef.current = selector;
  const selectedStateRef = React.useRef(selector(getState()));
  selectedStateRef.current = selector(getState());

  const rerender = React.useCallback(() => {
    const newState = selectorRef.current(getState());
    if (newState === selectedStateRef.current) return;
    forceRerender({});
  }, [getState]);

  React.useEffect(() => {
    const unSubscribe = subscribe(rerender);
    return () => unSubscribe();
  }, [rerender, subscribe]);

  return selectedStateRef.current;
}
