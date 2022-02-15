<template>
  <div class="pokemon">
    <div class="pokemon-data">
      <img :src="pokemon.sprites.front_default" alt="Pokemon image">
      <h1>{{ capitalize(pokemon.name) }}</h1>
      <div :class="starClass" @click="toggleFavorite" />
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
    },
    toggleFavorite() {
      this.$store.commit('pokemons/toggleFavorite', this.pokemon.id)
    }
  },
  computed: {
    starClass() {
      if (this.$store.state.pokemons.pokemons[this.pokemon.id - 1].favorite) {
        return 'star favorite'
      }

      return 'star'
    }
  }
}
</script>

<style scoped>
.pokemon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: 0 auto;
}

.pokemon-data {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4d4d4;
  padding-bottom: 20px;
}

.pokemon-data img {
  width: 300px;
}

.star {
  mask: url('~/assets/images/star-solid.svg');
  position: absolute;
  top: 6px;
  right: 6px;
  width: 46px;
  height: 40px;
  color: red;
  z-index: 5;
  cursor: pointer;
  background-color: black;
  transition: background-color 0.3s;
}

.star:hover,
.star.favorite {
  background-color: gold;
}
</style>
