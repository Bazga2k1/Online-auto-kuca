<template>
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Glavna stranica</a></li>
            <li><a href="#">Katalog</a></li>
            <li><a href="#">Usluge</a></li>
            <li><a href="#">Kontatk</a></li>
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