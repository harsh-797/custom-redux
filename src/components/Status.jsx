import React from "react"

import { useSelector } from "../redux/custom-redux"
import { Context } from "../redux/Provider"

export default function Status() {
  const status = useSelector(a => a.status)
  const {dispatch} = React.useContext(Context)
  return <div>
    <button onClick={() => {
      if (status === 'pending')
        dispatch({ type: "status/resolved" })
      else
        dispatch({ type: "status/pending" })
    }}>Status: {status }</button>
  </div>
}