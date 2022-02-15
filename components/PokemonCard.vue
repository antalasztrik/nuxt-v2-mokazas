<template>
    <div class="pokemon-card-wrapper">
      <NuxtLink :to=linkTo()>
        <div class="pokemon-card">
          <img :src="pokemon.imageURL" :alt="pokemon.name">
          <p>{{ capitalize(pokemon.name) }}</p>
        </div>
      </NuxtLink>
      <div :class="starClass" @click="toggleFavorite" />
    </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: Object
  },
  methods: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    linkTo() {
      return `/pokemon/${this.pokemon.id}`
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
.pokemon-card-wrapper {
  position: relative;
}

.pokemon-card {
  border: 2px solid gray;
  padding: 5px 10px;
  cursor: pointer;
  width: 120px;
  z-index: 1;
  transition: box-shadow 0.3s;
}

.pokemon-card p {
  font-size: 22px;
}

.pokemon-card:hover {
  box-shadow: 1px 5px 15px -5px #000000;
}

.star {
  mask: url('~/assets/images/star-solid.svg');
  position: absolute;
  top: 6px;
  right: 31px;
  width: 23px;
  height: 20px;
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
