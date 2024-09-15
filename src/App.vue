<template>
  <v-app>
    <v-app-bar app color="dark-grey" dark>
      <div class="d-flex align-center">
        <v-btn href="/" class="mr-2">
          <v-img
            alt="Audi Logo"
            class="shrink"
            contain
            src="./assets/audi-logo.png"
            width="40"
          />
        </v-btn>

        <v-img
          alt="Slogan"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/slogan.png"
          width="200"
        />
      </div>
    
      <v-col align="right">
        <v-btn
          text
          class="pa-3"
          color="grey lighten-6"
          to="/prijava"
          v-if="!isAuthenticated"
        >
          Prijava za kupnju kroz R1 račun
        </v-btn>
        <v-btn
          text
          class="pa-3"
          color="red lighten-8"
          v-else
          @click="logout"
        >
          Odjava
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },

  methods: {
    ...mapActions('auth', ['logout', 'checkAuthStatus']),
  },

  mounted() {
    this.checkAuthStatus();
  },
};
</script>
