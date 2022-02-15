export const state = () => ({
  pokemons: [],
  pokemonData: {}
})

export const mutations = {
  updatePokemons(state, pokemons) {
    state.pokemons = pokemons
  },
  addOpenedPokemon(state, pokemon) {
    state.pokemonData[pokemon.id] = pokemon
  },
  toggleFavorite(state, pokemon) {
    pokemon.favorite = !pokemon.favorite
  }
}
