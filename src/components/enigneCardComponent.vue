<template>
    <v-card 
    class="mx-auto"
    max-width="200"
    >
    <v-img
        v-bind:src="this.imageUrl"
        width="110px"
        class="mx-auto"
    ></v-img>

    <v-card-title class="justify-center">
        {{ this.engineName }}
    </v-card-title><br>
    <v-card-subtitle align="center">
        {{ this.displacement }} ccm<br>
        {{ this.power }} kW, {{ this.torque }} Nm<br>
        {{ this.economy }} l/100km<br>
        {{ this.fuel }}
    </v-card-subtitle>
    <v-card-subtitle align="center">
        <b>{{ this.cijenaE }} €</b>
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
import { mapMutations, mapGetters } from "vuex"

export default {
    props:{
        engineName: null,
        displacement: null,
        power: null,
        torque: null,
        economy: null,
        fuel: null,
        cijenaE: null,
        imageUrl: null
    },

    methods: {
      ...mapMutations({setEngineIme: "setEngineIme", setEngineCijena: "setEngineCijena"}),

      setStates(){
        this.setEngineIme(this.engineName);
        this.setEngineCijena(this.cijenaE);
        this.$router.push('/' + this.getAutoIme + '/konfiguracija3');
      }
    },

    computed: {
    ...mapGetters({getAutoIme: 'getAutoIme'})
  },
}
</script>