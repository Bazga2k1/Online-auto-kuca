<template>
    <v-card
     class="mx-auto"
     max-width="1000"
     variant = "outlined"
    >
     <v-img
       v-bind:src="this.imageUrl"
       width="1000"
       height="600"
     ></v-img><br>
      <div>
          <div class="text-h5 mb ml-4">
            {{ this.intName }}
          </div>
      </div>

     <v-card-subtitle>
        {{ this.opis }}
     </v-card-subtitle>
 
     <v-card-subtitle>
       Cijena: {{ this.cijenaI }} € 
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
 
       <v-spacer></v-spacer>
   </v-card>
 </template>
 
 <script>
 import { mapMutations, mapGetters } from "vuex"

 export default {
  name: 'interiorCardComponent',
     props: {
         intName: null,
         opis: null,
         cijenaI: null,
         imageUrl: null,
     },

     methods: {
      ...mapMutations({setInteriorIme: "setInteriorIme", setInteriorCijena: "setInteriorCijena"}),

      setStates(){
        this.setInteriorIme(this.intName);
        this.setInteriorCijena(this.cijenaI);
        this.$router.push('/' + this.getAutoIme + '/konfiguracija4');
      }
    },

    computed: {
    ...mapGetters({getAutoIme: 'getAutoIme'})
  },
 }
 </script>