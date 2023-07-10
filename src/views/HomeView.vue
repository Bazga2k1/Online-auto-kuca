<template>
  <v-container>
    <h1>Audi</h1>
    <v-row>
      <v-col>
        <carCardComponent 
          car-name="A1"
          cijena="34499.69"
          image-url="../../public/HomeView/car1.png"
          >
        </carCardComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import carCardComponent from "@/components/carCardComponent.vue"
  
export default {
    name: 'Home-View',
    data: () =>({
      imageUrl1 : "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    }),

    components: {
      carCardComponent,
    },
  } 
</script>
