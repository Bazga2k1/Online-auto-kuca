<template>
    <div>
      <header>
        <nav>
          <ul>
            <a href="#">Glavna stranic</a>
            <a href="#">Katalog</a>
            <a href="#">Usluge </a>
            <a href="#">Kontatk</a>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="banner">
          <h1>Audi</h1>
          <p>Vorsprung durch Technik</p>
          <a href="#" class="btn">Kompletni inventar</a>
        </section>
  
        <section class="featured-cars">
          <h2>Katalog</h2>
          <div v-for="car in cars" :key="car.id" class="car-card">
            <img :src="car.image" :alt="car.model">
            <h3>{{ car.model }}</h3>
            <p>Cijena: {{ car.price }}</p>
            <a href="#" class="btn">Detaljnije</a>
          </div>
        </section>
      </main>
  
      <footer>
        <p></p>
      </footer>
    </div>
  </template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}

</script>
<style scoped>
</style>