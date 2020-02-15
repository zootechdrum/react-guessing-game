import React from "react";
import Pokemon from "../../images/pokemon-ban.png"
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
    <img src = {Pokemon} alt="pokemon" />

    </div>
  );
}

export default Jumbotron;
