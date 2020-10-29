import React from "react";
import "./App.css";

import Header from "./components/Header/Index";
import  PokemonContext  from "./contexts/PokemonContext";
import MainPokemons from './components/MainPokemons/Index';

function App() {
 
  return (
    <PokemonContext>
      <div className="App">
        <Header />
         <MainPokemons/>
      </div>
    </PokemonContext>
  );
}

export default App;
