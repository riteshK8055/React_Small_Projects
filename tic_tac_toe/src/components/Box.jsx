import React from "react";

const Box = (props) => {

    return (

        <div onClick={props.onClick} className="border border-black h-28 w-28 flex justify-center items-center font-extrabold text-lg ">{props.value}</div>
    );
};

export default Box;