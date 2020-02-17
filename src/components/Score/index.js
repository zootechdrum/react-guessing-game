import React from "react";
import "./style.css";


function Score({score, gameStatus}) {
    
        if (gameStatus === true) {
            return( 
                <div>
                <p>Game Over</p> <button type="button" className="btn btn-primary">Try Again!</button>
                </div>
                
            )
        }else {
            return (
                <div className=" text-center">
                <p className="score-text">Total Score : {score}</p>
            </div>
            )
        }
   
}

export default Score;