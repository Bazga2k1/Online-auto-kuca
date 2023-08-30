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
 
     <v-card-item>
        <div>
            <div class="text-h5 mb ml-4">
              {{ this.intName }}
            </div>
        </div>
     </v-card-item>

     <v-card-subtitle>
        {{ this.opis }}
     </v-card-subtitle>
 
     <v-card-subtitle>
       Cijena: {{ this.cijenaI }} € 
     </v-card-subtitle>

     <v-card-actions>
      <v-btn
        rounded
        color="green lighten-1"
        text
        :to="'/' + carName + '/konfiguracija4'"
      >
        Odabir
      </v-btn>
    </v-card-actions>
 
       <v-spacer></v-spacer>
 
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
         intName: null,
         opis: null,
         cijenaI: null,
         imageUrl: null,
     },

     methods: {
      ...mapMutations({setAutoIme: "InteriorIme", setAutoCijena: "InteriorCijena"}),
    }
 }
 </script>