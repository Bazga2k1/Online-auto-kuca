<template>
  <v-container>
    <h1>Odaberite paket naplataka</h1><br>
    <v-divider></v-divider>

    <div v-if="loading" class="loading">Loading rims...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <template v-if="rims.length > 0">
      <v-card-title v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 17'))">17"</v-card-title>
      <v-row class="my-2" v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 17'))">
        <v-col v-for="rim in rims.filter(rim => rim.rimSize.startsWith('7.5j x 17'))" :key="rim._id">
          <rimsCardComponent
            :rimName="rim.rimName"
            :velicina="rim.rimSize"
            :cijenaR="rim.priceR"
            :image-url="rim.rimImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 17'))"></v-divider>

      <v-card-title v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 18'))">18"</v-card-title>
      <v-row class="my-2" v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 18'))">
        <v-col v-for="rim in rims.filter(rim => rim.rimSize.startsWith('7.5j x 18'))" :key="rim._id">
          <rimsCardComponent
            :rimName="rim.rimName"
            :velicina="rim.rimSize"
            :cijenaR="rim.priceR"
            :image-url="rim.rimImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="rims.some(rim => rim.rimSize.startsWith('7.5j x 18'))"></v-divider>

      <v-card-title v-if="rims.some(rim => rim.rimSize.startsWith('8.5j x 19'))">19"</v-card-title>
      <v-row class="my-2" v-if="rims.some(rim => rim.rimSize.startsWith('8.5j x 19'))">
        <v-col v-for="rim in rims.filter(rim => rim.rimSize.startsWith('8.5j x 19'))" :key="rim._id">
          <rimsCardComponent
            :rimName="rim.rimName"
            :velicina="rim.rimSize"
            :cijenaR="rim.priceR"
            :image-url="rim.rimImageUrl"
          />
        </v-col>
      </v-row>
      <v-divider v-if="rims.some(rim => rim.rimSize.startsWith('8.5j x 19'))"></v-divider>

      <v-card-title v-if="rims.some(rim => rim.rimSize.startsWith('9.0j x 20'))">20"</v-card-title>
      <v-row class="my-2" v-if="rims.some(rim => rim.rimSize.startsWith('9.0j x 20'))">
        <v-col v-for="rim in rims.filter(rim => rim.rimSize.startsWith('9.0j x 20'))" :key="rim._id">
          <rimsCardComponent
            :rimName="rim.rimName"
            :velicina="rim.rimSize"
            :cijenaR="rim.priceR"
            :image-url="rim.rimImageUrl"
          />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import axios from 'axios';
import rimsCardComponent from "@/components/rimsCardComponent.vue";

export default {
  name: 'ConfigView1',

  components: {
    rimsCardComponent
  },

  data() {
    return {
      rims: [],
      loading: true,
      error: null,
    };
  },

  methods: {
    async fetchRims() {
      try {
        const response = await axios.get('http://localhost:3000/rims');
        this.rims = response.data;
      } catch (error) {
        this.error = 'Failed to load rims. Please try again later.';
        console.error('Error fetching rims:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  created() {
    this.fetchRims();
  }
};
</script>

<style scoped>
.loading {
  color: orange;
  font-size: 24px;
}

.error {
  color: red;
  font-size: 24px;
}

v-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
