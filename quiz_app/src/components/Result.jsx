import React from "react";

const Result = ({userAnswer , quizData , resetQuiz}) => {

    console.log(userAnswer);
    const correctAnswer = userAnswer.filter((answer) => answer).length;
   
    console.log(correctAnswer);

    return (

        <div className="">
            <h2>Results</h2>
            <p>You answered {correctAnswer} out of {quizData.length} questions</p>
        </div>
    );
};

export default Result;