import React, { useState } from "react"

const Accordian = ({question , answer }) => {

   const[show , setShow] = useState(false);

   const collapse = () => {

    setShow(!show);

   }

    return (

        <div className="shadow-md p-2 m-2">

            <div className="flex gap-2 text-lg bg-purple-200">
               <button onClick={collapse}
               className=" px-2 rounded-full bg-white font-extrabold  text-gray-600"
               >{show?"-":"+"}</button>
               <h1 >{question}</h1>
                
            </div>
             
             {
                show && <p>{answer}</p>
             }
              
        </div>
    );
};

export default Accordian;
