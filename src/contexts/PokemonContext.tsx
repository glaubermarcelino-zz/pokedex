import React, { createContext, useContext, useEffect, useState } from "react";
import { PokemonResult } from "../models/PokemonResult";
import axios from "axios";
import { PokemonContextType } from "./PokemonContextType";

export const PokemonContext = createContext<PokemonContextType>({
  loadPokemon: () => {},
  anterior: () => {},
  proximo: () => {},
  pokemons: {},
});

const PokemonProvider = (props: any) => {
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState<PokemonResult>();

  const loadPokemon = () => {
    axios
      .get<PokemonResult>(url)
      .then((resp) => {
        setPokemons(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const proximo = function (url: string): void {
    setUrl(url);
  };
  const anterior = function (url: string): void {
    setUrl(url);
  };

  //Ficará observando as mudanças e recarregará ao mudar a url
  useEffect(loadPokemon, [url]);

  return (
    <PokemonContext.Provider
      value={{ pokemons, anterior, proximo, loadPokemon }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
export const usePokemonContext = () => {
  const { anterior, proximo, pokemons } = useContext<PokemonContextType>(
    PokemonContext
  );
  return { anterior, proximo, pokemons };
};
