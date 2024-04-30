import React from "react";

const Result = ({userAnswer , quizData , resetQuiz}) => {

    const correctAnswer = userAnswer.filter((answer) => answer).length;

    return (

        <div className="">
            <h2>Results</h2>
            <p>You answered {correctAnswer} out of {quizData.length} questions</p>
        </div>
    );
};

export default Result;