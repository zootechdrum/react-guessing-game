
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Score from "./components/Score";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";
import PokemonCard from "./components/PokemonCard"
import './App.css';

class App extends Component {
  state = {
    pokemonChar : pokemon,
    pokeChosen: [],
    score: 0,
    gameOver: false
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // Use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t

      //courtesy of https://javascript.info/task/shuffle
      [array[i], array[j]] = [array[j], array[i]];
    }   
  }

  resetGame = () => {
    this.setState({
                  score:0,
                  gameOver: false,
                  pokeChosen: []
                })
                console.log(this.state)
  }

  savePoke = pokeChar => {
    //Checks if the pokeCharechter has been chosen if it as
    //Lose and scroll to the top
    //Else save the pokemon and increase score by one
    if(this.state.pokeChosen.includes(pokeChar)) {
        this.setState({gameOver: true})
        window.scrollTo(0, 0);
    } else {
      console.log(this.state.pokeChosen)
        this.setState({ pokeChosen: [...this.state.pokeChosen, pokeChar]})
        this.setState({ score: this.state.score + 1})
    }
    //If all charechters have been chosen the user won scroll to the top
    if(this.state.pokeChosen.length === 11){
      window.scrollTo(0, 0);
  }

    //shuffle array of pokemon
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
          <div class="col">
            <Score gameStatus={this.state.gameOver} pokemonArray={this.state.pokeChosen} onClick={this.resetGame} score={this.state.score}/>
          </div>
        </div>
      <div class="row">
            {this.state.pokemonChar.map(pokemon => (

        <div class="col-3">
            <PokemonCard
              gameStatus={this.state.gameOver}
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
        <Footer />
      </div>
  )}
};
    
    
    export default App;
