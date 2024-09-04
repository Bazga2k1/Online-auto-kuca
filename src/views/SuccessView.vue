<template>
    <v-container>
      <h1 align="center">Vaša narudžba je zaprimljena!</h1>
      <v-divider class="my-5"></v-divider>
      <h2>Ovo je vaš kôd narudžbe: <b>{{ orderId }}</b><br>Zabilježite ga i dajte na pokaz u auto kući u koju se dostavlja.</h2><br>
      <v-divider class="pa-10"></v-divider>
      <v-card-actions>
        <v-btn href="/" class="mx-auto" color="grey lighten-2">Povratak na početnu stranicu</v-btn>
      </v-card-actions>
      <img
        src="https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png"
        width="500"
        class="mx-auto d-flex">
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'SuccessView',
  
    data() {
      return {
        orderId: null,
      };
    },
  
    methods: {
      async fetchOrderId() {
        try {
          const token = localStorage.getItem('token');
  
          const response = await axios.post(
            'http://localhost:3000/orders/find',
            {
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
                deliveryLocation: this.getLokacija,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          this.orderId = response.data.orderId;
        } catch (error) {
          console.error('Error fetching order ID:', error);
          alert('Došlo je do greške pri dohvaćanju koda narudžbe.');
        }
      },
    },
  
    mounted() {
      this.fetchOrderId();
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
        getLokacija: 'getLokacija',
        getColorName: 'getColorName',
        getColorCijena: 'getColorCijena',
        getTotalCijena: 'getTotalCijena',
      }),
    },
  };
  </script>