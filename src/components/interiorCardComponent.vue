<template>
  <v-card class="mx-auto" max-width="1000" variant="outlined">
    <v-img
      :src="imageUrl"
      width="1000"
      height="600"
    ></v-img><br>
    <div>
      <div class="text-h5 mb ml-4">
        {{ interiorName }}
      </div>
    </div>

    <v-card-subtitle>
      {{ description }}
    </v-card-subtitle>

    <v-card-subtitle>
      Cijena: {{ priceI }} €
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="setStates"
        rounded
        color="green lighten-1"
        text
      >
        Odabir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: 'interiorCardComponent',
  props: {
    interiorName: String,
    description: String,
    priceI: Number,
    imageUrl: String,
  },

  methods: {
    ...mapMutations({
      setInteriorIme: "setInteriorIme",
      setInteriorCijena: "setInteriorCijena"
    }),

    setStates() {
      this.setInteriorIme(this.interiorName);
      this.setInteriorCijena(this.priceI);
      this.$router.push('/' + this.getAutoIme + '/konfiguracija4');
    }
  },

  computed: {
    ...mapGetters({ getAutoIme: 'getAutoIme' })
  },
}
</script>
