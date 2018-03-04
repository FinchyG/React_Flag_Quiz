import React from 'react';

export default class FlagQuestion extends React.Component {

/*    constructor(props) {
        super(props);
        this.state = {visibility: "hidden"};
        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
        const makeVisible = this.state.visibility === "visible" ? "hidden" : "visible";
        this.setState({visibility: makeVisible});
    }
*/
    render() {
        return (
        <div>
            <img src={this.props.src} />
            <input type="text" size="15" />
            <span>
              <button>Check Answer</button>
              <button>Get Answer</button>
            </span>
            <span>
              <img className="FlagAnswerMark" src={require('./Images/Correct.png')} />
              <img className="FlagAnswerMark" src={require('./Images/Incorrect.png')} />
            </span>
        </div>
        );
    }
    
}