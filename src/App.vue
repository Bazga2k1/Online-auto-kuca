<template>
  <v-app>
    <v-app-bar
      app
      color="dark-grey"
      dark
    >
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
        <v-btn text class="pa-3" color="grey lighten-6" to="/prijava" v-if="!userExists">
          Prijava za kupnju kroz R1 račun
        </v-btn>
        <v-btn text class="pa-3" color="red lighten-8" v-else @click="Logout" href="/">
          Odjava
        </v-btn>
      </v-col>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    userExists: false
  }),

  methods: {
    async IfUserExists() {
      try {
        const response = await axios.get('http://localhost:3000/login/auth-status');
        this.userExists = response.data.isAuthenticated;
      } catch (error) {
        console.error("Error checking user authentication status:", error);
        this.userExists = false;
      }
    },

    async Logout() {
      try {
        await axios.post('http://localhost:3000/logout');
        console.log("Odjavljeno");
        this.userExists = false;
        this.$router.push('/');
      } catch (error) {
        console.log("Greška prilikom odjave:", error);
      }
    }
  },

  mounted() {
    this.IfUserExists();
  }
};
</script>
