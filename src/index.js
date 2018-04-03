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
                  <FlagQuestion flagImage={Flags[0]} answer="Austria" />
                  <FlagQuestion flagImage={Flags[1]} answer="Belgium" />
                  <FlagQuestion flagImage={Flags[2]} answer="France" />
                  <FlagQuestion flagImage={Flags[3]} answer="Germany" />
                  <FlagQuestion flagImage={Flags[4]} answer="Greece" />
                  <FlagQuestion flagImage={Flags[5]} answer="Ireland" />
                  <FlagQuestion flagImage={Flags[6]} answer="Italy" />
                  <FlagQuestion flagImage={Flags[7]} answer="Poland" />
                  <FlagQuestion flagImage={Flags[8]} answer="Romania" />
                  <FlagQuestion flagImage={Flags[9]} answer="Sweden" />
                </div>
              </div>
            </div>
                );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));