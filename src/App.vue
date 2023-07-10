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
          src="https://www.pngkit.com/png/full/139-1391126_the-worlds-finest-technology-companies-train-at-linux.png"
          width="40"
        />

        <v-img
          alt="Slogan"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
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
