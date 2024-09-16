<template>
  <v-card class="mx-auto" max-width="210">
    <v-img
      :src="imageUrl"
      height="100px"
    ></v-img>

    <v-card-title>
      {{ colorName }}
    </v-card-title>
    <v-card-subtitle>
      {{ type }}
    </v-card-subtitle>
    <v-card-subtitle align="center">
      <b>{{ priceC }} €</b>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        @click="setStates"
        class="mx-auto"
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
  props: {
    colorName: String,
    type: String,
    priceC: Number,
    imageUrl: String,
  },

  methods: {
    ...mapMutations({
      setColorIme: "setColorIme",
      setColorCijena: "setColorCijena",
      addPrice: "addPrice"
    }),

    setStates() {
      this.setColorIme(this.colorName);
      this.setColorCijena(this.priceC);
      this.addPrice();
      this.$router.push('/' + this.getAutoIme + '/narudzba');
    }
  },

  computed: {
    ...mapGetters({ getAutoIme: 'getAutoIme' })
  },
}
</script>
