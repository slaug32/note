import React from 'react'
import style from "./Button.module.css"

const Button = ({ children, ...props }) => {
   return (
      <button {...props} className={style.mybutton}>
         {children}
      </button>
   )
}

export default Button
