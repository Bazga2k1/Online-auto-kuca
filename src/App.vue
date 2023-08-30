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
      <v-btn text class="pa-3" color="red lighten-8" v-else @click="Logout()" href="/">
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
import { getAuth, onAuthStateChanged } from "../firebase";

export default {
  name: 'App',

  data: () => ({
    userExists: false
  }),

  methods:{
    IfUserExists(){
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userExists = true
        } else {
          this.useExists = false
        }
      });

    },

    Logout(){
      try {
        console.log("Odjavljeno");
        getAuth().signOut();
      } catch (error) {
        console.log("Greška", error);
      }

      this.IfUserExists()

    }
  },

  mounted(){
    this.IfUserExists()
  }
};
</script>
