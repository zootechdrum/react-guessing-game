import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import PokemonCard from "./components/PokemonCard"
import './App.css';

class App extends Component {
  state = {
    pokeChosen: []
  };

  savePoke = event => {
    console.log("Hello")
  };


  
    render() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper >
      <div class="row">
            {pokemon.map(pokemon => (

        <div class="col-3">
            <PokemonCard
              onClick={this.savePoke}
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
