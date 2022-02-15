<template>
  <NuxtLink :to=linkTo()>
    <div class="pokemon-card">
      <img :src="pokemon.imageURL" :alt="pokemon.name">
      <p>{{ capitalize(pokemon.name) }}</p>
    </div>
  </NuxtLink>
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
    }
  }
}
</script>

<style scoped>
.pokemon-card {
  border: 2px solid black;
  padding: 5px 10px;
  cursor: pointer;
  width: 120px;
}

.pokemon-card p {
  font-size: 22px;
}
</style>
