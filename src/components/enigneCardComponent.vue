<template>
    <v-card 
    class="mx-auto"
    max-width="300"
    >
    <v-img
        v-bind:src="this.imageUrl"
        width="110px"
        align="center"
    ></v-img>

    <v-card-title>
        {{ this.engineName }}
    </v-card-title><br>
    <v-card-subtitle align="right">
        {{ this.displacement }} ccm<br>
        {{ this.power }} kW, {{ this.torque }} Nm<br>
        {{ this.economy }} l/100km<br>
        {{ this.fuel }}
    </v-card-subtitle>
    <v-card-subtitle align="center">
        <b>{{ this.cijenaE }} €</b>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        rounded
        color="green lighten-1"
        text
        :to="'/' + carName + '/konfiguracija3'"
      >
        Odabir
      </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>

export default {
    props:{
        engineName: null,
        displacement: null,
        power: null,
        torque: null,
        economy: null,
        fuel: null,
        cijenaE: null,
        imageUrl: null
    }
}
</script>