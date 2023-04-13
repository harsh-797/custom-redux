import React from "react"

import { useSelector } from "../redux/custom-redux"
import { Context } from "../redux/Provider"

export default function Counter() {
  const counter = useSelector(a => a.counter)
  const {dispatch} = React.useContext(Context)
  return <div>
    <button onClick={() => {

        dispatch({ type: "counter/increment" })
      // else
      //   dispatch({ type: "counter/decrement" })
    }}>Counter: { counter}</button>
  </div>
}