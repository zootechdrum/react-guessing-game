import React from "react";
import "./style.css";


function Score({score, onClick, gameStatus, pokemonArray}) {
    
        if (gameStatus === true) {
            return( 
                <div className="w3-animate-top">
                <p>Game Over</p> <button type="button" onClick={onClick} className="btn btn-primary">Try Again!</button>
                </div>
                
            )
        } else if(pokemonArray.length === 12){
            return(
                <div className="w3-animate-zoom">
                    <div><span className="winMessage" >You Win</span></div>
                    <button type="button" onClick={onClick} className="btn btn-win">Play Again!</button>
                 </div>
            ) 
            }else {
            return (
                <div className=" text-center w3-animate-bottom">
                <p className="score-text">Total Score : {score}</p>
            </div>
            )
        }
   
}

export default Score;