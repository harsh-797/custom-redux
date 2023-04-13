import React from "react"

import { useSelector } from "../redux/custom-redux"
import { Context } from "../redux/Provider"

export default function Theme() {
  const theme = useSelector(a => a.theme)
  const {dispatch} = React.useContext(Context)
  return <div>
    <button onClick={() => {
      if (theme === 'light')
        dispatch({ type: "theme/dark" })
      else
        dispatch({ type: "theme/light" })
    }}>Theme: { theme}</button>
  </div>
}