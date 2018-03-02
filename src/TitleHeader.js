import React from 'react';
import './FlagQuiz.css';

export default class TitleHeader extends React.Component {
    render() {
        return (
        <div className="Wide-Div">
          <h1>Europe Flag Quiz</h1>
          <img className="Slider" src={require('./Images/FlagQuiz.png')} alt="sliding flag image" />
        </div>
        );
    }
}