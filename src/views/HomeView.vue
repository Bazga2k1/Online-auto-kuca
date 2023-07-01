<template>
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="banner">
          <h1>Audi</h1>
          <p>Vorsprung durch Technik</p>
          <a href="#" class="btn">Browse Inventory</a>
        </section>
  
        <section class="featured-cars">
          <h2>Featured Cars</h2>
          <div v-for="car in cars" :key="car.id" class="car-card">
            <img :src="car.image" :alt="car.model">
            <h3>{{ car.model }}</h3>
            <p>Price: {{ car.price }}</p>
            <a href="#" class="btn">View Details</a>
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
    cars() {
        return {
          featuredCars: [
            {
              id: 1,
              model: "Audi A1",
              price: "29,49.50€",
              image: "car1.jpg",
            },
            {
              id: 2,
              model: "Audi A3",
              price: "42,780.90€",
              image: "car2.jpg",
            }]
            };
        }
    }
}

</script>

<style scoped>
</style>