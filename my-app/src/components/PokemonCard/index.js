import React from "react";
import "./style.css";

function PokemonCard({name, image}) {
    return (
        <div>
            <h5 class="card-title">{name}</h5>
                <div>
                    <img className= "pokemon-image" src = {image} alt = {name} />
                </div>    
        </div>


    );
}

export default PokemonCard;
