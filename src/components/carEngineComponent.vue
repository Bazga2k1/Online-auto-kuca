<template>
    <v-card 
    class="mx-auto"
    max-width="1000px">
    <v-img
        v-bind:src="this.imageUrl"
        width="200px">
    </v-img>

    <v-card-title>
        {{ this.engineName }}
    </v-card-title><br>
    <v-card-subtitle>
        {{ this.displacement }}<br>
        {{ this.power }}, {{ this.torque }}<br>
        {{ this.economy }}<br>
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
        imageUrl: null,
        engineName: null
    }
}
</script>
