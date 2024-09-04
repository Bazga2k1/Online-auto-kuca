<template>
  <v-container>
    <h1>Odaberite boju</h1><br>
    <v-divider></v-divider>

    <div v-if="loading" class="loading">Loading colors...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <template v-if="colors.length > 0">
      <v-card-title v-if="getColorsByType('Gloss').length > 0">Uni-boje</v-card-title>
      <v-row class="my-2" v-if="getColorsByType('Gloss').length > 0">
        <v-col v-for="color in getColorsByType('Gloss')" :key="color._id">
          <colorCardComponent
            :colorName="color.colorName"
            :type="color.type"
            :priceC="color.priceC"
            :image-url="color.colorImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="getColorsByType('Gloss').length > 0"></v-divider>

      <v-card-title v-if="getColorsByType('Metallic').length > 0">Metallic</v-card-title>
      <v-row class="my-2" v-if="getColorsByType('Metallic').length > 0">
        <v-col v-for="color in getColorsByType('Metallic')" :key="color._id">
          <colorCardComponent
            :colorName="color.colorName"
            :type="color.type"
            :priceC="color.priceC"
            :image-url="color.colorImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="getColorsByType('Metallic').length > 0"></v-divider>

      <v-card-title v-if="getColorsByType('Metallic Pearl').length > 0">Perla efekt</v-card-title>
      <v-row class="my-2" v-if="getColorsByType('Metallic Pearl').length > 0">
        <v-col v-for="color in getColorsByType('Metallic Pearl')" :key="color._id">
          <colorCardComponent
            :colorName="color.colorName"
            :type="color.type"
            :priceC="color.priceC"
            :image-url="color.colorImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="getColorsByType('Metallic Pearl').length > 0"></v-divider>
    </template>

    <v-divider v-if="colors.length === 0">No colors available.</v-divider>
  </v-container>
</template>

<script>
import axios from 'axios';
import colorCardComponent from "@/components/colorCardComponent.vue";

export default {
  name: 'ConfigView4',

  components: {
    colorCardComponent
  },

  data() {
    return {
      colors: [],
      loading: true,
      error: null,
    };
  },

  methods: {
    async fetchColors() {
      try {
        const response = await axios.get('http://localhost:3000/colors');
        this.colors = response.data;
      } catch (error) {
        this.error = 'Failed to load colors. Please try again later.';
        console.error('Error fetching colors:', error);
      } finally {
        this.loading = false;
      }
    },
    getColorsByType(type) {
      return this.colors.filter(color => color.type === type);
    }
  },

  created() {
    this.fetchColors();
  }
};
</script>

<style scoped>
.loading, .error {
  color: red;
  font-size: 18px;
}

v-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
