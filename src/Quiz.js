import React from "react";
import Options from "./component/Options";

export default function Quiz(props){
   const {question, options } = props.data

   
   const optionsElement = options.map((option, index) => <Options value={option} selected={props.selected} key={index}/>)
  
    return (
        <div className="quiz-card">
            <h3 className= "question" dangerouslySetInnerHTML={{__html: question}} />
            <div className="options">
              {optionsElement}
            </div>
            <hr />
        </div>
        
    )

}