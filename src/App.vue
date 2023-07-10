<template>
  <v-app>
    <v-app-bar
      app
      color="dark-grey"
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="Audi Logo"
          class="shrink mr-2"
          contain
          src="./assets/audi-logo.png"
          width="40"
        />

        <v-img
          alt="Slogan"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/slogan.png"
          width="200"
        />
      </div>

    <v-btn text class="pa-5">
      Prijava
    </v-btn>

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
