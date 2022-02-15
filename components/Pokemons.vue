<template>
  <div class="pokemons-component">
    <h2>All of the first generation Pokemons</h2>
    <div class="pokemon-cards">
      <PokemonCard v-for="pokemon of pokemons" :key="pokemon.id" :pokemon="pokemon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokemons",
  data() {
    return {
      firstGenerationPokemonCount: 151,
      pokemons: []
    }
  },
  async mounted() {
    if (!this.$store.state.pokemons.pokemons.length) {
      console.log('A Pokémon adatokat API hívással húztuk le')
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.firstGenerationPokemonCount}&offset=0`)
      const { results } = await response.json()
      const pokemons = results.map((pokemon, index) => {
        const pokemonID = index + 1

        return {
          name: pokemon.name,
          id: pokemonID,
          favorite: false,
          imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`
        }
      })

      this.$store.commit('pokemons/updatePokemons', pokemons)
    } else {
      console.log('A Pokémon adatokat a store-ból töltöttük be')
    }

    this.pokemons = this.$store.state.pokemons.pokemons
  }
}
</script>

<style scoped>
.pokemons-component {
  text-align: center;
}

.pokemon-cards {
  display: grid;
  grid-template-columns: repeat(10, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
</style>
