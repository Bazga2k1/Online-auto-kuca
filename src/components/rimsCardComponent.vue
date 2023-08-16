<template>
    <v-card
     class="mx-auto"
     max-width="115"
     variant = "outlined"
   >
     <v-img
       v-bind:src="this.imageUrl"
       width="115px"
     ></v-img>
 
     <v-card-item>
        <div>
            <div class="text-h9 mb-5">
                {{ this.rimName }}
            </div>
        </div>
     </v-card-item>

     <v-card-subtitle>
        {{ this.velicina }}
     </v-card-subtitle>
 
     <v-card-subtitle>
       Cijena: {{ this.cijena }} € 
     </v-card-subtitle>
 
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
         rimName: null,
         velicina: null,
         cijena: null,
         imageUrl: null,
 
     }
 }
 </script>
 
 <style>
 
 </style>