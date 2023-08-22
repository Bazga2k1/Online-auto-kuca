<template>
    <v-card 
    class="mx-auto"
    max-width="1000px">
    <v-img
        v-bind:src="this.imageUrl">
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
