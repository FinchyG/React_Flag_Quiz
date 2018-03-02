import React from 'react';
import ReactDOM from 'react-dom';
import './FlagQuiz.css';
import {FlagsArray} from './FlagsArray';
import TitleHeader from './TitleHeader';
import FlagQuestion from './FlagQuestion';

class Page extends React.Component {
    render() {
      const Flags = FlagsArray;
        return (
            <div>
              <TitleHeader />
              <div className="Wide-Div">
                <h4>Questions</h4>
                <div className="Narrow-Div">
                  <FlagQuestion src={Flags[0]} />
                  <FlagQuestion src={Flags[1]} />
                  <FlagQuestion src={Flags[2]} />
                  <FlagQuestion src={Flags[3]} />
                  <FlagQuestion src={Flags[4]} />
                  <FlagQuestion src={Flags[5]} />
                  <FlagQuestion src={Flags[6]} />
                  <FlagQuestion src={Flags[7]} />
                  <FlagQuestion src={Flags[8]} />
                  <FlagQuestion src={Flags[9]} />
                </div>
              </div>
            </div>
                );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));