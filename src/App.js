
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import PokemonCard from "./components/PokemonCard"
import './App.css';

class App extends Component {
  state = {
    pokemonChar : pokemon,
    pokeChosen: []
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }   
  }
  savePoke = event => {
    console.log(event)
    var mixArray = this.shuffle(pokemon)
    this.setState({pokemon: mixArray})
  };


  
    render() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper >
      <div class="row">
            {this.state.pokemonChar.map(pokemon => (

        <div class="col-3">
            <PokemonCard
              onClick={() => this.savePoke(pokemon.name)}
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              weakness={pokemon.weakness}
            />
        </div>
          ))}
      </div>

        </Wrapper>
      </div>
  )}
};
    
    
    export default App;
