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
      Cijena: od {{ this.cijena }} € 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        rounded
        color="orange lighten-1"
        text
        href="/konfiguracija1/':carName'"
      >
        Konfiguracija
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>

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
        carName: null,
        cijena: null,
        imageUrl: null,

    }
}
</script>

<style>

</style>