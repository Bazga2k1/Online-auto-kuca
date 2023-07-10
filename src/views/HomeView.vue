<template>
  <v-container>
    <h1>Audi</h1>
    <v-row>

      <v-col>
        <carCardComponent 
        :carName="A1"
        :cijena="34499.69"
        :image-url= "this.imageUrl1" >
        </carCardComponent>
      </v-col>


      <v-col>
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      A3
    </v-card-title>

    <v-card-subtitle>
      Cijena:
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="red lighten-2"
        text
      >
        Konfiguracija
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
      </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      A4
    </v-card-title>

    <v-card-subtitle>
      Cijena: 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="red lighten-2"
        text
      >
        Konfiguracija
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
      </div>
    </v-expand-transition>
  </v-card>
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
