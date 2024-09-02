<template>
  <div class="home">
    <h1>Aktualna ponuda</h1><hr>
    <v-container>
      <v-row>
        <v-col
          v-for="car in cars"
          :key="car._id"
          cols="12"
          sm="6"
          md="4"
        >
          <car-card-component
            :carName="car.carName"
            :cijena="car.price"
            :imageUrl="car.carImageUrl"
          />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="loading" class="loading">Loading cars...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import carCardComponent from '@/components/carCardComponent.vue';

export default {
  components: {
    carCardComponent,
  },
  data() {
    return {
      cars: [],
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    async fetchCars() {
      try {
        const response = await axios.get('http://localhost:3000/cars');
        this.cars = response.data;
      } catch (error) {
        this.error = 'Failed to load cars. Please try again later.';
        console.error('Error fetching cars:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.loading{
  color: orange;
  font-size: 24px;
  padding-left: 30px;
  padding-right: 30px;
}

.error {
  color: red;
  font-size: 24px;
  padding-left: 30px;
  padding-right: 30px;
}

v-row {
  display: flex;
  flex-wrap: wrap;
}
</style>