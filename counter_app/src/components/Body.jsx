import React, { useState } from "react";

const Body = () => {

    let [count , setCount] = useState(0);

    const increment = () =>{

        if(count< 20){

            setCount(count + 1);

        }
                
    };

    const decrement = () => {

            

            if(count >0){
                setCount(count - 1);
            }

    };

    return (

        <div className="flex justify-evenly items-center mt-10 font-bold text-2xl">
            <button onClick={increment}>+</button>
              <h1>{count}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )

};

export default Body;