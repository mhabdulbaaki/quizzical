import React from "react";

export default function IntroPage(props){
    return (
        <div className="intro-body">
            <h3 className="intro-title"> Quizzical</h3>
            <p className="desc">What do you know?</p>
            <button className="btn" onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}