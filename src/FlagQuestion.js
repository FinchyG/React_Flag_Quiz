import React from 'react';

export default class FlagQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {answer: "hidden"};
        this.getAnswer = this.getAnswer.bind(this);
    }

    getAnswer() {
        this.setState({answer: "visible"});
    }

/*    checkAnswer() {
        let answer = document.getElementsByTagName("input").values().trim();
        if(answer === {this.props.FlagName}{
            this.setState
        })
    }
*/
    render() {
        return (
        <div>
            <img src={this.props.src} alt="Flag" />
            <input type="text" size="15" />
            <p className="FlagAnswer" style={{visibility: this.state.answer}}>{this.props.FlagName}</p>
            <span>
              <button>Check Answer</button>
              <button onClick={this.getAnswer}>Get Answer</button>
            </span>
            <span>
              <img className="FlagAnswerMark" src={require('./Images/Correct.png')} alt="correct tick"/>
              <img className="FlagAnswerMark" src={require('./Images/Incorrect.png')} alt="incorrect cross" />
            </span>
        </div>
        );
    }
    
}