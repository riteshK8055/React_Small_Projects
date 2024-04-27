import React from "react"

const Accordian = ({question , answer }) => {

   
    return (

        <div className="shadow-md p-2 m-2">

            <div className="flex gap-2 text-lg bg-purple-200">
               <button className=" px-2 rounded-full bg-white font-extrabold  text-gray-600">+</button>
               <h1 >{question}</h1>
                
            </div>
             
              <p>{answer}</p>
        </div>
    );
};

export default Accordian;
