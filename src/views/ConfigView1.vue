<template>
  <v-container>
    <v-card-title>17"</v-card-title>
      <rimsCardComponent
      rimName = "Aluminijski petokraki naplatak 7.5J x 17"
      cijena = "0"
      image-url = "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE8XxKV3hc_3ctXtM5wjtOcx-F2Gk0XGZgZGDgYQBhkCoOghgGRQJjdxTXE0dMnGADd4GG8uAAAAA?wid=90">
    </rimsCardComponent><rimsCardComponent
      rimName="Aluminijski petokraki naplatak sa plastičnim umecima 7.5j x 17"
      cijena="500"
      image-url="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE8S0OWM9zlDOWu21O35uEjqX0bco0vMjAzMHAwgDDIFAZBDQMigTC7i2uIo6dPMADF_LxXuAAAAA?wid=90">
    </rimsCardComponent>
    <br>
    <v-card-title>18"</v-card-title>

    <br>
    <v-card-title>19"</v-card-title>

    <br>
    <v-card-title>20"</v-card-title>

  </v-container>
</template>

<script>
import rimsCardComponent from "@/components/rimsCardComponent.vue"

export default {
  name: 'ConfigView1',

  components: {
    rimsCardComponent
  },
}
</script>