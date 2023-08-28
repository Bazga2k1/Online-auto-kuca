<template>
    <v-card 
    class="mx-auto"
    max-width="200"
    >
    <v-img
        v-bind:src="this.imageUrl"
        width="200px"
    ></v-img>

    <v-card-title>
        {{ this.colorName }}
    </v-card-title><br>
    <v-card-subtitle>
        {{ this.type }}
    </v-card-subtitle>
    <v-card-subtitle>
        <b>{{ this.cijena }} €</b>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        rounded
        color="green lighten-1"
        text
        :to="'/' + carName + '/narudzba'"
      >
        Odabir
      </v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>

export default {
    props:{
        colorName: null,
        type: null,
        cijena: null,
        imageUrl: null
    }
}
</script>