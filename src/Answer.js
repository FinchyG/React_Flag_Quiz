import React from 'react';

export const Answer = (props) => {

    const show = props.show;
  
    if (show) {
  
      return <p className="FlagAnswer">{props.answer}</p>
  
    }
  
    return <p className="FlagAnswer" style={{visibility: "hidden"}}>{props.answer}</p>;

}