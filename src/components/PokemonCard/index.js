import React from "react";
import "./style.css";

function PokemonCard({name, image, type, weakness}) {
    return (
        <div className= "card poke-card">
                <div>
                    <img className= "pokemon-image card-img-top" src = {image} alt = {name} />
                </div>    
                <h5 class="card-title">{name}</h5>
                <div class="d-flex justify-content-around">
                    <p>Type: {type}</p>
                    <p>Weakness: {weakness}</p>
                </div>
        </div>


    );
}

export default PokemonCard;
