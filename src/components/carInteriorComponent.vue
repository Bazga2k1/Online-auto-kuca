<template>
    <v-card
     class="mx-auto"
     max-width="1000"
     variant = "outlined"
    >
     <v-img
       v-bind:src="this.imageUrl"
       width="1000"
     ></v-img><br>
 
     <v-card-item>
        <div>
            <div class="text-h5 mb">
              {{ this.intName }}
            </div>
        </div>
     </v-card-item>

     <v-card-subtitle>
        {{ this.opis }}
     </v-card-subtitle>
 
     <v-card-subtitle>
       Cijena: {{ this.cijena }} € 
     </v-card-subtitle>

     <v-card-actions>
      <v-btn
        rounded
        color="green lighten-1"
        text
        href="/:carName/konfiguracija4"
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
 export default {
     props: {
         intName: null,
         opis: null,
         cijena: null,
         imageUrl: null,
     }
 }
 </script>