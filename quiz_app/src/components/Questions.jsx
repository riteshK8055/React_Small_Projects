import React, { useState } from "react";


const Questions = ({question , onclick}) => {

   

    return (

        <div>
            <h1 className="text-lg font-serif">{question.question}</h1>
            
            {
                question.options.map((data , index) => {

                    return <li onClick={()=> onclick()} className= "hover:bg-slate-400 rounded-md p-1 m-1"
                     key={index}><button >{data.text}</button></li>
                })
            }
            
        </div>
    )
}

export default Questions ; 