import React from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";
import ListPokemons from "../ListPokemons/Index";
import ButtonPagination from "../ButtonPagination/Index";
import Pokemon from "../../models/Pokemon";

export default function Index() {
  const { pokemons } = usePokemonContext();
 
  return (
    <>
      <div className="listPokemons">
        {pokemons?.results.map((pok: Pokemon) => (
          <ListPokemons pok={pok} key={pok.name} />
        ))}
      </div>
      <ButtonPagination next={pokemons?.next} previous={pokemons?.previous} />
    </>
  );
}
