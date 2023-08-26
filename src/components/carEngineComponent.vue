<template>
    <v-card 
    class="mx-auto"
    max-width="500"
    >
    <v-img
        v-bind:src="this.imageUrl"
        width="200px"
    ></v-img>

    <v-card-title>
        {{ this.engineName }}
    </v-card-title><br>
    <v-card-subtitle>
        {{ this.displacement }} ccm<br>
        {{ this.power }} kW, {{ this.torque }} Nm<br>
        {{ this.economy }} l/100km<br>
        {{ this.fuel }}
    </v-card-subtitle>
    <v-card-subtitle>
        <b>{{ this.cijena }} €</b>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        rounded
        color="green lighten-1"
        text
        href="/:carName/konfiguracija3"
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
        imageUrl: null
    }
}
</script>