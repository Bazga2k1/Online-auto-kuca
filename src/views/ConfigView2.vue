<template>
  <v-container>
    <h1>Odaberite motor</h1><br>
    <v-divider></v-divider><br>
    <h3>Benzinski pogon</h3><br>
    <v-row>
      <v-col>
        <engineCardComponent
        img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
        engineName="30 TFSI"
        displacement="999"
        power="81"
        torque="200"
        economy="6.8"
        fuel="Benzin"
        cijena="0">
        </engineCardComponent><br>
        </v-col>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="35 TFSI"
          displacement="1498"
          power="110"
          torque="270"
          economy="5.5"
          fuel="Benzin"
          cijena="2000">
          </engineCardComponent><br>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="40 TFSI"
          displacement="1984"
          power="150"
          torque="320"
          economy="5.6"
          fuel="Benzin"
          cijena="4000">
          </engineCardComponent><br>
        </v-col>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="45 TFSI"
          displacement="1395"
          power="180"
          torque="370"
          economy="6.5"
          fuel="Benzin"
          cijena="4500">
          </engineCardComponent><br>
          </v-col>
        </v-row>
      <v-row>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="50 TFSI"
          displacement="1995"
          power="210"
          torque="410"
          economy="7.0"
          fuel="Benzin"
          cijena="7500">
          </engineCardComponent><br>
        </v-col>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="55 TFSI Quattro"
          displacement="2995"
          power="250"
          torque="500"
          economy="6.7"
          fuel="Benzin"
          cijena="10000">
          </engineCardComponent><br>
        </v-col>
      </v-row>
      <v-divider></v-divider><br>
      <h3>Dizel pogon</h3><br>
      <v-row>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="30 TDI"
          displacement="1968"
          power="85"
          torque="300"
          economy="3.5"
          fuel="Diesel"
          cijena="3000">
          </engineCardComponent><br>
        </v-col>
        <v-col>
          <engineCardComponent
          img-url="https://cdn.icon-icons.com/icons2/2622/PNG/512/tech_engine_icon_157411.png"
          engineName="35 TDI"
          displacement="1968"
          power="110"
          torque="360"
          economy="3.7"
          fuel="Diesel"
          cijena="5000">
          </engineCardComponent><br>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import engineCardComponent from '@/components/enigneCardComponent.vue';

export default {
    name: 'ConfigView2',

    components:{
        engineCardComponent
    },
}
</script>