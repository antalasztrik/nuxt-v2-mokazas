export const state = () => ({
  pokemons: []
})

export const mutations = {
  update(state, pokemons) {
    state.pokemons = pokemons
  },
  toggleFavorite(state, pokemon) {
    pokemon.favorite = !pokemon.favorite
  }
}
