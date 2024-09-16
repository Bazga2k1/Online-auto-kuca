<template>
  <v-container>
    <h1 align="center">Pregled narudžbe</h1><br>
    <v-divider></v-divider><br>
    <v-row>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Automobil</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getAutoIme }}</v-card-subtitle>
          <v-card-subtitle>{{ this.formatThousands(getAutoCijena) }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Motor</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getEngineName }}</v-card-subtitle>
          <v-card-subtitle>{{ getEngineCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Naplatci</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getRimName }}</v-card-subtitle>
          <v-card-subtitle>{{ getRimCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Interijer</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getInteriorName }}</v-card-subtitle>
          <v-card-subtitle>{{ getInteriorCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Boja</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getColorName }}</v-card-subtitle>
          <v-card-subtitle>{{ getColorCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row><br>
    <h2 align="center">Ukupna cijena: {{ this.formatThousands(getTotalCijena) }} €</h2>
    <v-row>
      <v-col>
        <v-card-actions>
          <v-btn
          @click="buyCar"
          :disabled="!selectedItem"
          class="mx-auto"
          width="300"
          height="70"
          rounded
          outlined
          text
          color="green">
            Narudžba
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col>
        <v-select
          label="Odaberite lokaciju"
          v-model="selectedItem"
          :items="['Audi Pula', 'Porsche Rijeka', 'Porsche Zagreb', 'Audi Karlovac', 'Porsche Split', 'Audi Zadar']"
          ></v-select>
      </v-col>
      <v-col>
        <v-card-actions>
          <v-btn
          class="mx-auto"
          width="300"
          height="70"
          rounded
          outlined
          text
          color="red"
          href="/">
            Poništavanje
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row> 
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    selectedItem: null
  }),

  name: 'TotalView',

  methods: {
    ...mapMutations({setLokacija: "setLokacija"}),

    formatThousands(res){
        return new Intl.NumberFormat('en-US').format(res);
      },

    async buyCar(){
      const lokacijaIme = this.selectedItem;

      this.setLokacija(lokacijaIme);

      const orderData = {
        selectedCar: this.getAutoIme,
        selectedCarPrice: this.getAutoCijena,
        selectedRim: this.getRimName,
        selectedRimPrice: this.getRimCijena,
        selectedEngine: this.getEngineName,
        selectedEnginePrice: this.getEngineCijena,
        selectedInterior: this.getInteriorName,
        selectedInteriorPrice: this.getInteriorCijena,
        selectedColor: this.getColorName,
        selectedColorPrice: this.getColorCijena,
        totalOrderPrice: this.getTotalCijena,
        deliveryLocation: lokacijaIme,
        user: this.$store.getters.getUserEmail || null,
      };

      try {
        await axios.post('https://online-auto-kuca-backend.onrender.com/orders', orderData);
        this.$router.push('/success');
      } catch (error) {
        console.error("Error while placing order:", error);
      }
    }
  },

  computed: {
    ...mapGetters({
      getAutoIme: 'getAutoIme',
      getAutoCijena: 'getAutoCijena',
      getRimName: 'getRimName',
      getRimCijena: 'getRimCijena',
      getEngineName: 'getEngineName',
      getEngineCijena: 'getEngineCijena',
      getInteriorName: 'getInteriorName',
      getInteriorCijena: 'getInteriorCijena',
      getColorName: 'getColorName',
      getColorCijena: 'getColorCijena',
      getTotalCijena: 'getTotalCijena',
    }),
  },
}
</script>
