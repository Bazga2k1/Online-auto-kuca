<template>
    <v-card 
    class="mx-auto"
    max-width="200"
    >
    <v-img
        v-bind:src="this.imageUrl"
        height="100px"
    ></v-img>

    <v-card-title>
        {{ this.colorName }}
    </v-card-title>
    <v-card-subtitle>
        {{ this.type }}
    </v-card-subtitle>
    <v-card-subtitle align="center">
        <b>{{ this.cijenaC }} €</b>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        class="mx-auto"
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
import { mapMutations } from "vuex";

export default {
    props:{
        colorName: null,
        type: null,
        cijenaC: null,
        imageUrl: null
    },

    methods: {
      ...mapMutations({setAutoIme: "ColorIme", setAutoCijena: "ColorCijena"}),
    }
}
</script>