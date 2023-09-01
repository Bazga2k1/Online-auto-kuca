<template>
   <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      
      v-bind:src="this.imageUrl"
      height="180px"
    ></v-img>

    <v-card-title>
        {{ this.carName }}
    </v-card-title>

    <v-card-subtitle>
      Cijena: od {{ this.formatThousands(this.cijena) }} €
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="setStates"
        color="orange lighten-1"
        text
      >
        Konfiguracija
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
    props: {
        carName: null,
        cijena: null,
        imageUrl: null,
    },

    data: () => ({

    }),

    methods: {
      ...mapMutations({setAutoIme: "setAutoIme", setAutoCijena: "setAutoCijena"}),

      formatThousands(res){
        return new Intl.NumberFormat('en-US').format(res);
      },

      setStates(){
        this.setAutoIme(this.carName);
        this.setAutoCijena(this.cijena);
        this.$router.push('/' + this.getAutoIme + '/konfiguracija1');
      }
    },

    computed: {
    ...mapGetters({getAutoIme: 'getAutoIme'})
  },
}
</script>