import React from 'react';

export default class FlagQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {answer: "hidden",
                      correct: "hidden",
                      incorrect: "hidden",
                      value: ""};
        this.getAnswer    = this.getAnswer.bind(this);
        this.checkAnswer  = this.checkAnswer.bind(this);
    }

    getAnswer() {
        this.setState({answer: "visible"});
    }

    checkAnswer(e) {
        const nameOfFlag          = this.props.FlagName;
        const nameOfFlagUpperCase = nameOfFlag.toUpperCase();
        const userAnswer          = this.input.value;
        const userAnswerFormatted = userAnswer.trim().toUpperCase();
        if(userAnswerFormatted == nameOfFlagUpperCase){
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
            <img src={this.props.src} alt="Flag" />
            <input type="text" size="15" ref={(input) => this.input = input} />
            <p className="FlagAnswer" style={{visibility: this.state.answer}}>{this.props.FlagName}</p>
            <span>
              <button onClick={this.checkAnswer}>Check Answer</button>
              <button onClick={this.getAnswer}>Get Answer</button>
            </span>
            <span>
              <img className="FlagAnswerMark" style={{visibility: this.state.correct}} 
               src={require('./Images/Correct.png')} alt="correct tick"/>
              <img className="FlagAnswerMark" style={{visibility: this.state.incorrect}}
               src={require('./Images/Incorrect.png')} alt="incorrect cross" />
            </span>
        </div>
        );
    }
    
}