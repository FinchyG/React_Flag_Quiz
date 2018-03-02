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
                  <p>Type in the boxes the name of the country you think the flag belongs 
                  to, then click the Submit Answer button to check if you're right!</p>
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