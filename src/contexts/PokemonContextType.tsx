export interface PokemonContextType{
  proximo(url:string):void;
  anterior(url:string):void;
  loadPokemon(url:string):void;
  pokemons:any;
}