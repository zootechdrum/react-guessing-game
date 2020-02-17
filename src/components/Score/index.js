import React from "react";
import "./style.css";


function Score({score}) {
    return (

            <div className=" text-center">
                <p className="score-text">Total Score : {score}</p>
            </div>
    )
}

export default Score;