<template>
  <Pokemon :pokemon="pokemonData"/>
</template>

<script>
export default {
  name: "PokemonDataPage",
  async asyncData({ params, store }) {
    let pokemonData = store.state.pokemons.pokemonData[params.id]
    if (!pokemonData) {
      console.log('Az egyéni Pokémon adatokot API hívással húztuk le')
      pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(res => res.json())
      store.commit('pokemons/addOpenedPokemon', pokemonData)
      return { pokemonData }
    }

    console.log('Az egyéni Pokémon adatokat a store-ból húztuk elő')
    return { pokemonData }
  }
}
</script>

<style scoped>

</style>
