import React from 'react';
import { FlagsArray } from './FlagsArray';
import { QuizInstructions } from './QuizInstructions';
import TitleHeader from './TitleHeader';
import FlagQuestion from './FlagQuestion';

export default class FlagQuiz extends React.Component {
    
  render() {
      
    const Flags = FlagsArray;
    
    return (
    
      <div>
    
        <TitleHeader />
    
          <div className="Wide-Div">
        
            <h4>Questions</h4>
        
              <div className="Narrow-Div">
        
                <QuizInstructions />
        
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