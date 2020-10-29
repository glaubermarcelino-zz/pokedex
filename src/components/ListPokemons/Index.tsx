import React from "react";
import Pokemon from "../../models/Pokemon";

interface ListPokemon {
  pok:Pokemon
}
const ListPokemons = (props: ListPokemon) => {
  return <div className="pokemon">{props.pok.name}</div>;
};
export default ListPokemons;
