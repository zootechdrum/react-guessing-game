import React from "react";
import "./style.css";

function PokemonCard({name, image, type, weakness, onClick}) {
    return (
        <div  onClick={onClick}  className="card poke-card">
                <div>
                    <img className= "pokemon-image card-img-top" src = {image} alt = {name} />
                </div>    
                <h5 class="card-title">{name}</h5>
                <div class="d-flex justify-content-around">
                    <div>
                        <h6 className="title-type">Type:</h6>    
                        <p className="pokeCard-type-desc">{type}</p>                   
                    </div>
                    <div>
                        <h6 className="title-weakness">Weakness:</h6>
                        <p>{weakness}</p>
                    </div>

                </div>
        </div>


    );
}

export default PokemonCard;
