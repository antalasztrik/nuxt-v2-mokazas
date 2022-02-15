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
  toggleFavorite(state, id) {
    const pokemon = state.pokemons[id - 1]
    pokemon.favorite = !pokemon.favorite
  }
}
