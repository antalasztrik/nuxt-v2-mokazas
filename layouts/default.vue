<template>
  <div>
    <header>
      <img src="~/assets/images/pokemon.svg" alt="Pokemon logo">
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>
header {
  padding: 20px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header img {
  width: 300px;
}

main {
  padding: 0 20px;
}
</style>
