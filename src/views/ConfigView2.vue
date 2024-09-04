<template>
  <v-container>
    <h1>Odaberite motor</h1><br>
    <v-divider></v-divider><br>

    <h3>Benzinski pogon</h3><br>
    <v-row>
      <v-col v-for="engine in engines.filter(engine => engine.fuelType === 'Benzin')" :key="engine._id">
        <engineCardComponent
          :imageUrl="engine.engineImageUrl"
          :engineName="engine.engineName"
          :displacement="engine.displacement"
          :power="engine.power"
          :torque="engine.torque"
          :economy="engine.economy"
          :fuel="engine.fuelType"
          :cijenaE="engine.priceE"
        />
        <br>
      </v-col>
    </v-row>
    
    <v-divider></v-divider><br>

    <h3>Dizel pogon</h3><br>
    <v-row>
      <v-col v-for="engine in engines.filter(engine => engine.fuelType === 'Diesel')" :key="engine._id">
        <engineCardComponent
          :imageUrl="engine.engineImageUrl"
          :engineName="engine.engineName"
          :displacement="engine.displacement"
          :power="engine.power"
          :torque="engine.torque"
          :economy="engine.economy"
          :fuel="engine.fuelType"
          :cijenaE="engine.priceE"
        />
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import engineCardComponent from '@/components/enigneCardComponent.vue';

export default {
  name: 'ConfigView2',

  components: {
    engineCardComponent
  },

  data() {
    return {
      engines: [],
      loading: true,
      error: null,
    };
  },

  methods: {
    async fetchEngines() {
      try {
        const response = await axios.get('http://localhost:3000/engines');
        this.engines = response.data;
      } catch (error) {
        this.error = 'Failed to load engines. Please try again later.';
        console.error('Error fetching engines:', error);
      } finally {
        this.loading = false;
      }
    }
  },

  created() {
    this.fetchEngines();
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
