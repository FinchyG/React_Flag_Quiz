import React from 'react';
import { FlagPicture }      from './FlagPicture';
import { Answer }           from './Answer';
import { ShowOrHideButton } from './ShowOrHideButton';

export default class FlagQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show       : false,
                      correct    : false,
                      incorrect  : false,
                      buttonLabel: "Show Answer",
                      value: ""};
        this.showOrHideAnswer = this.showOrHideAnswer.bind(this);
        this.checkUserAnswer  = this.checkUserAnswer.bind(this);
    }

    showOrHideAnswer() {
        const makeVisible    = this.state.show        === false ? true : false;
        const setButtonLabel = this.state.buttonLabel === "Show Answer" ? "Hide Answer" : "Show Answer"; 
        this.setState({show: makeVisible});
        this.setState({buttonLabel: setButtonLabel});
    }

    checkUserAnswer(e) {
        const nameOfFlag          = this.props.answer.toUpperCase();
        const userAnswer          = this.input.value.toUpperCase();
        if(userAnswer === nameOfFlag){
            this.setState({correct: "visible"});
            this.setState({incorrect: "hidden"});
        }  else {
            this.setState({incorrect: "visible"});
            this.setState({correct: "hidden"});
        }
    }
    

    render() {
        return (
        <div>
            <FlagPicture flagImage={this.props.flagImage} alt="Flag" />
            <input type="text" size="15" ref={(input) => this.input = input} />
            <button onClick={this.checkUserAnswer}>Check Answer</button>
            <ShowOrHideButton onClick={this.showOrHideAnswer} buttonLabel={this.state.buttonLabel} />
            <Answer show={this.state.show} answer={this.props.answer} />
            <span>
              <img className="FlagAnswerMark Correct" style={{visibility: this.state.correct}} 
               src={require('./images/Correct.png')} alt="correct tick"/>
              <img className="FlagAnswerMark Incorrect" style={{visibility: this.state.incorrect}}
               src={require('./images/Incorrect.png')} alt="incorrect cross" />
            </span>
        </div>
        );
    }
    
}