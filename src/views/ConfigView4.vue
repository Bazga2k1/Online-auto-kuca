<template>
  <v-container>
    <h1>Odaberite boju automobila</h1>
    <v-divider></v-divider><br>

    <h2>Uni-boje</h2><br>
    <v-row>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/detailed/801/65666c_9gn2-3o.png"
          colorName="Nardo siva"
          type="Gloss"
          cijena="500">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/detailed/801/17568c.png"
          colorName="Turbo Plava"
          type="Gloss"
          cijena="750">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/detailed/799/dde2e3_652a-m2.png"
          colorName="Ibis bijela"
          type="Gloss"
          cijena="0">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/799/85cf63.png.png"
          colorName="Kyalami zelena"
          type="Gloss"
          cijena="500">
        </colorCardComponent>
      </v-col>
    </v-row>

    <br><v-divider></v-divider><br>
    <h2>Metalik</h2><br>
    <v-row>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/799/edda1c.png.png"
          colorName="Python žuta"
          type="Metallic"
          cijena="0">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/detailed/799/b72123.png"
          colorName="Tango crvena"
          type="Metallic"
          cijena="500">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/798/000000_d0jq-74.png.png"
          colorName="Mythos crna"
          type="Metallic"
          cijena="1000">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/799/292b45.png.png"
          colorName="Navarra plava"
          type="Metallic"
          cijena="0">
        </colorCardComponent>
      </v-col>
    </v-row>

    <br><v-divider></v-divider><br>
    <h2>Metalik s bisernim efektom</h2><br>
    <v-row>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/799/7f7775.png.png"
          colorName="Daytona srebrna"
          type="Metallic Pearl"
          cijena="0">
        </colorCardComponent>
      </v-col>
      <v-col>
        <colorCardComponent
          imageUrl="https://everestautomotivemarket.com/images/thumbnails/280/350/detailed/799/929c9e.png.png"
          colorName="Arrow siva"
          type="Metallic Pearl"
          cijena="1500">
        </colorCardComponent>
      </v-col>
    </v-row>

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