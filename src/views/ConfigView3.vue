<template>
  <v-container>
    <h1>Odaberite interijer</h1>
    <v-divider></v-divider><br>

    <interiorCardComponent
      image-url="http://img.polovniautomobilioglasi.com/gonline_graphics/hrv_19508070_O_64d3f9d214f08.jpg"
      intName="Standardni interijer"
      opis='Platnena sjedala, navigacija, Bluetooth povezivanje, dvozonska klimatizacija, 7.5" display, putno računalo,
      bež platneni strop'
      cijenaI="0">
    </interiorCardComponent><br>

    <interiorCardComponent
      image-url="http://img.polovniautomobilioglasi.com/gonline_graphics/hrv_17459640_O_62d8123586675.jpg"
      intName="S-Line interijer"
      opis='Kožna profilirana sjedala, navigacija, Bluetooth povezivanje s glasovnim naredbama, digitalna kontrolna ploča,
      digitalna dvozonska klimatizacija, stražnja dvozonska klimatizacija, panorama, S-tronic multifunkcijski volan,
      putno računalo, dijagnostika, GPS praćenje s funkcijom poziva za hitne slučajeve'
      cijenaI="2000">
    </interiorCardComponent>
  </v-container>
</template>

<script>
import interiorCardComponent from '@/components/interiorCardComponent.vue';

export default {
  name: 'ConfigView3',

  components: {
    interiorCardComponent
  },
}
</script>