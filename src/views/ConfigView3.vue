<template>
  <v-container>
    <h1>Odaberite interijer</h1><br>
    <v-divider></v-divider>

    <div v-if="loading" class="loading">Loading interiors...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <v-row class="pa-6" v-if="interiors.length > 0">
      <v-col v-for="interior in interiors" :key="interior._id">
        <interiorCardComponent
          :interiorName="interior.interiorName"
          :description="interior.description"
          :priceI="interior.priceI"
          :image-url="interior.interiorImageUrl"
        />
      </v-col>
    </v-row>
    <v-divider v-if="interiors.length === 0">No interiors available.</v-divider>
  </v-container>
</template>

<script>
import axios from 'axios';
import interiorCardComponent from "@/components/interiorCardComponent.vue";

export default {
  name: 'ConfigView3',

  components: {
    interiorCardComponent
  },

  data() {
    return {
      interiors: [],
      loading: true,
      error: null,
    };
  },

  methods: {
    async fetchInteriors() {
      try {
        const response = await axios.get('http://localhost:3000/interiors');
        this.interiors = response.data;
        console.log(this.interiors); // Debugging: Check the fetched data
      } catch (error) {
        this.error = 'Failed to load interiors. Please try again later.';
        console.error('Error fetching interiors:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  created() {
    this.fetchInteriors();
  }
};
</script>

<style scoped>
.loading, .error {
  color: red;
  font-size: 18px;
}

v-row {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
