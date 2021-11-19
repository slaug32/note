import React from 'react'
import style from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {
   return (
      <input ref={ref} className={style.myinput} {...props} />
   )
})

export default Input
