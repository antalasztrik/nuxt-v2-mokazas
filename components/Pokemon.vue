<template>
  <div class="pokemon">
    <div class="pokemon-data">
      <img :src="pokemon.sprites.front_default" alt="Pokemon image">
      <h1>{{ capitalize(pokemon.name) }}</h1>
    </div>
    <PokemonStats :stats="pokemon.stats"/>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokemon: Object
  },
  methods: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<style scoped>
.pokemon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.pokemon-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: goldenrod;
  padding-bottom: 20px;
}

.pokemon-data img {
  width: 300px;
}
</style>
