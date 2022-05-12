import React from "react";

export default function Options(props){
    return(
        <div className="answer-option" onClick={(e) => props.selected(e.target.innerHTML)} dangerouslySetInnerHTML={{__html:props.value}} />
    )
}