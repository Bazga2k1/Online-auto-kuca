<template>
  <v-container>
    <h1>Odaberite boju automobila</h1>
    <v-divider></v-divider><br>

    <h2>Uni-boje</h2>
    <colorCardComponent
      imageUrl="https://everestautomotivemarket.com/images/detailed/801/65666c_9gn2-3o.png"
      colorName="Nardo siva"
      type="Gloss"
      cijena="500">
    </colorCardComponent>

    <br><v-divider></v-divider><br>
    <h2>Metalik</h2>

    <br><v-divider></v-divider><br>
    <h2>Metalik s bisernim efektom</h2>

  </v-container>
</template>

<script>
import colorCardComponent from '@/components/colorCardComponent.vue'

export default {
  name: 'ConfigView4.vue',

  components: {
    colorCardComponent
  },
}
</script>

<style>

</style>