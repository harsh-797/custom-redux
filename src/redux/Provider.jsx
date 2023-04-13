import React from "react";

import { appReducer } from "./reducers/appReducer";

export const Context = React.createContext(null)

const initialState = {
  counter: 0,
  status: "pending",
  theme: "dark"
}

export default function Provider({  children }) {   
  const [store, dispatch] = React.useReducer(appReducer, initialState)  

  const subscriberRef = React.useRef([])
  const storeRef = React.useRef(store)
  storeRef.current = store

  React.useLayoutEffect(() => {
    subscriberRef.current.forEach(f => f())
  }, [store])

  const value = React.useMemo(() => ({
    dispatch,
    subscribe: (f) => {
      subscriberRef.current.push(f)
      return () => {
        subscriberRef.current.filter((e) => e !== f)
      }
    }
    ,
    getState: () => storeRef.current
  }), [])
  
  return <Context.Provider value={value}>{children}</Context.Provider>
}