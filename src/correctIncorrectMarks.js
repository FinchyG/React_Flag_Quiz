import React from 'react';

export const CorrectIncorrectMarks = (props) => {

    return (

        <span>
        
            <img className="FlagAnswerMark Correct" style={{visibility: props.correct}} 
            src={require('./images/correct.png')} alt="correct tick"/>
        
            <img className="FlagAnswerMark Incorrect" style={{visibility: props.incorrect}}
            src={require('./images/incorrect.png')} alt="incorrect cross" />
        
        </span>


    )
}