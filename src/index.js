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
                  <FlagQuestion src={Flags[0]} FlagName="Austria" />
                  <FlagQuestion src={Flags[1]} FlagName="Belgium" />
                  <FlagQuestion src={Flags[2]} FlagName="France" />
                  <FlagQuestion src={Flags[3]} FlagName="Germany" />
                  <FlagQuestion src={Flags[4]} FlagName="Greece" />
                  <FlagQuestion src={Flags[5]} FlagName="Ireland" />
                  <FlagQuestion src={Flags[6]} FlagName="Italy" />
                  <FlagQuestion src={Flags[7]} FlagName="Poland" />
                  <FlagQuestion src={Flags[8]} FlagName="Romania" />
                  <FlagQuestion src={Flags[9]} FlagName="Sweden" />
                </div>
              </div>
            </div>
                );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));