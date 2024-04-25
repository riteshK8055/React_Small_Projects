import { useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXClicked, setIsXClicked] = useState(true);


  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }

    }

    return false;
  };
  const isWinner = checkWinner();


  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXClicked ? "X" : "0";

    setState(copyState);
    setIsXClicked(!isXClicked);
  };

  
  return (
    <div className="bg-blue-300 h-screen w-screen flex justify-center items-center">
     
     {
       isWinner ? (

        <>{isWinner} won the game</>

       ):(
        <div className="w-fit h-fit p-4 bg-blue-100 rounded-lg flex justify-evenly items-center ">
        <div>
          <Box onClick={() => handleClick(0)} value={state[0]} />
          <Box onClick={() => handleClick(1)} value={state[1]} />
          <Box onClick={() => handleClick(2)} value={state[2]} />
        </div>

        <div>
          <Box onClick={() => handleClick(3)} value={state[3]} />
          <Box onClick={() => handleClick(4)} value={state[4]} />
          <Box onClick={() => handleClick(5)} value={state[5]} />
        </div>

        <div>
          <Box onClick={() => handleClick(6)} value={state[6]} />
          <Box onClick={() => handleClick(7)} value={state[7]} />
          <Box onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>
       )
     }
      
    </div>
  );
}

export default App;
