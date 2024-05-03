import React , { useState } from 'react';
import Header from './components/Header';
import Questions from './components/Questions';
import { quizData } from './constants/quizData';
import Result from './components/Result';


function App() {

  const[currentQuestion , setCurrentQuestion] = useState(0);
  const[userAnswer , setUserAnswer] = useState([]);

  const nextQuestion = (isCorrect) => {


    setCurrentQuestion(currentQuestion+1);
    setUserAnswer([...userAnswer , isCorrect]);

  };

  const resetQuiz = () => {

    setCurrentQuestion(0);
    setUserAnswer([]);
  }



  return (
    
    <div className=" h-auto w-auto p-2 flex flex-col justify-center items-center bg-red-200 my-2">

      <Header />

    <div className="bg-white w-fit h-fit rounded-md p-3 border border-black shadow-md">

        
           {
            currentQuestion < quizData.length && (

              <Questions  question={quizData[currentQuestion]} onclick = {nextQuestion}  />
            )
           }

          {
            currentQuestion === quizData.length && (

              <Result
              userAnswer = {userAnswer}
              quizData = {quizData}
              resetQuiz = {resetQuiz}
             />

            )
          }
         


    </div>

    </div>
  )
}

export default App;
