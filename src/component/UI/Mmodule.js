import React from 'react'
import style from "./Mmodule.module.css"

const Mmodule = ({ children, visible, setVisible }) => {

   const rootClass = [style.mymodule]
   if (visible) {
      rootClass.push(style.active)
   }

   return (
      <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
         <div classNmae={style.mymodule__content} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Mmodule
