import React from "react"
import { createRoot } from "react-dom/client"
import '../index.css'
const Option =({Options})=> {
    return (
        <div className="flex-1/2">
            {Options}
        </div>
        
        
    )
}

const Question= ({QuestionName , Options1 , Options2, Options3,Options4}) =>{

    return (
         <div  className =" ">
            { QuestionName}
            <div className="flex justify-items-center">
         <Option Options={Options1} />
          <Option Options={Options2} />
          <Option Options={Options3} />
          <Option Options={Options4} />
            </div>
         
  
        </div>
    )
       
    
}
export default Question