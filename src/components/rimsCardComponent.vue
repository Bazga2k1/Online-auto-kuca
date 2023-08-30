<template>
    <v-card
      class="mx-auto pa-2 px-2 d-flex-column"
      max-width="115"
      height="450"
      variant="outlined"
   >
     <v-img
       v-bind:src="this.imageUrl"
       width="115px"
     ></v-img>
 
     <v-card-item>
        <div>
            <div class="text-h9 mb-5" align="center">
                <b>{{ this.rimName }}</b>
            </div>
        </div>
     </v-card-item>

     <v-card-subtitle align="center">
        {{ this.velicina }}
     </v-card-subtitle>
 
     <v-card-subtitle align="center">
       Cijena: {{ this.cijenaR }} € 
     </v-card-subtitle>

     <v-card-actions>
      <v-btn
        absolute bottom
        rounded
        color="green lighten-1"
        text
        :to="'/' + carName + '/konfiguracija2'"
      >
        Odabir
      </v-btn>
    </v-card-actions>
 
     <v-expand-transition>
       <div v-show="show">
         <v-divider></v-divider>
       </div>
     </v-expand-transition>
   </v-card>
 </template>
 
 <script>
 import { mapMutations } from "vuex"
 
 export default {
     props: {
         rimName: null,
         velicina: null,
         cijenaR: null,
         imageUrl: null,
     },

     methods: {
      ...mapMutations({setAutoIme: "RimIme", setAutoCijena: "RimCijena"}),
    }
 }
 </script>