import React, { useState } from "react";
import TodoLists from "./TodoList";




const Body = () => {

    const [text , setText] = useState("");
    const [items , setItems] = useState([]);

    const itemEvent = (e)=> {

        setText(e.target.value);
    }

    const listOfItems = () => {

        setItems((oldItems) => {

            return [...oldItems , text];
        });

        setText("");
    }
    return(

       <>
       
       <div className="flex justify-center">
            <input onChange={itemEvent} className="p-2 h-10" type="text" value={text} placeholder="todos..." />
            <button className="px-2 py-0.5 border border-black rounded-full mx-2 bg-black text-white font-extrabold text-2xl"
             onClick={listOfItems}
            >+</button>
            
        </div>

        <ol>
            {

                items.map((item) => {

                    return <TodoLists text = {item} />;
                })
            }
        </ol>

       </>
    );
};

export default Body; 