<template>
  <div class="stats-wrapper">
    <h1><u>Pokemon Stats</u></h1>
    <div class="stats">
      <template v-for="stat in normalizedStats">
        <h2>{{ stat.stat.name }} </h2>
        <h2>{{ stat.base_stat }}</h2>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonStats",
  props: {
      stats: Array
  },
  computed: {
    normalizedStats() {
      return this.stats.map(stat => {
        if (stat.stat.name === 'special-attack') {
          stat.stat.name = 'sp. attack'
        }

        if (stat.stat.name === 'special-defense') {
          stat.stat.name = 'sp. defense'
        }

        return stat
      })
    }
  }
}
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  column-gap: 20px;
  row-gap: 15px;
  margin-top: 10px;
}

.stats h2 {
  text-transform: uppercase;
}

.stats h2:nth-child(2n) {
  text-align: center;
}
</style>
