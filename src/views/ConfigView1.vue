<template>
  <v-container>
    <h1>Odaberite paket naplataka</h1><br>
    <v-card-title>17"</v-card-title>
    <v-row>
        <v-col>
          <rimsCardComponent
          rimName = "Aluminijski petokraki naplatak"
          velicina="7.5j x 17"
          cijena = "0"
          image-url = "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE8XxKV3hc_3ctXtM5wjtOcx-F2Gk0XGZgZGDgYQBhkCoOghgGRQJjdxTXE0dMnGADd4GG8uAAAAA?wid=90">
          </rimsCardComponent>
        </v-col>
        <v-col>
          <rimsCardComponent
            rimName="Aluminijski petokraki naplatak sa plastičnim umecima"
            velicina="7.5j x 17"
            cijena="300"
            image-url="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE8S0OWM9zlDOWu21O35uEjqX0bco0vMjAzMHAwgDDIFAZBDQMigTC7i2uIo6dPMADF_LxXuAAAAA?wid=90">
          </rimsCardComponent>
        </v-col>
        <v-col>
          <rimsCardComponent
            rimName="Aluminijski petokraki naplatak sa crnim plastičnim umecima"
            velicina="7.5j x 17"
            cijena="300"
            image-url="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE83xzjpsm0XtivuS_uWOhG5pnfv86rZmBmYOBgAGGQKQyCGgZEAmF2F9cQR0-fYADbkBSeuAAAAA?wid=90">
          </rimsCardComponent>
        </v-col>
        <v-col>
          <rimsCardComponent
            rimName="Audi Sport matirani aluminijski naplatak - titanij"
            velicina="7.5J x 17"
            cijena="1500"
            image-url="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEWxlYS0qLkvIZgewAJq7M3MT0VP2sgtR0fka-gqL8lNLkkpTUksTMnGJ2kCE85nN6fpgtXuzjvaiO9-Cniy_5toZIMzAzMHAwgDDIFAZBDQMigTC7i2uIo6dPMABV2zOJuAAAAA?wid=90">
          </rimsCardComponent>
        </v-col>
      <br>
    </v-row>
    <v-row>
      <v-card-title>18"</v-card-title>

      <br>
    </v-row>
    <v-row>
      <v-card-title>19"</v-card-title>

      <br>
    </v-row>
    <v-row>
      <v-card-title>20"</v-card-title>
    
      <br>
    </v-row>

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