<template>
  <v-app>
    <v-app-bar
      app
      color="dark-grey"
      dark
    >

      <div class="d-flex align-center">
        <v-btn href="/">
          <v-img
            alt="Audi Logo"
            class="shrink mr-2"
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
      <v-btn text class="pa-3" color="grey lighten-6" href="/prijava">
        Prijava za kupnju kroz R1 račun
      </v-btn>
    </v-col>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
