<template>
  <div class="pokemon">
    <img :src="pokemon.imageURL" :alt="pokemon.name">
    <p>{{ capitalize(pokemon.name) }}</p>
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
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
}
</script>

<style scoped>
.pokemon {
  border: 2px solid black;
  padding: 5px 10px;
  cursor: pointer;
  width: 120px;
}

.pokemon p {
  font-size: 22px;
}
</style>
