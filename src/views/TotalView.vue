<template>
  <v-container>
    <h1 align="center">Pregled narudžbe</h1><br>
    <v-divider></v-divider><br>
    <v-row>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Automobil</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getAutoIme }}</v-card-subtitle>
          <v-card-subtitle>{{ this.formatThousands(getAutoCijena) }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Motor</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getEngineName }}</v-card-subtitle>
          <v-card-subtitle>{{ getEngineCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Naplatci</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getRimName }}</v-card-subtitle>
          <v-card-subtitle>{{ getRimCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Interijer</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getInteriorName }}</v-card-subtitle>
          <v-card-subtitle>{{ getInteriorCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col>
        <v-card
        class="mx-auto"
        width="350"
        variant="outlined">
          <v-card-title class="justify-center">Boja</v-card-title>
          <v-divider class="mx-4 my-1"></v-divider>
          <v-card-subtitle>{{ getColorName }}</v-card-subtitle>
          <v-card-subtitle>{{ getColorCijena }} €</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row><br>
    <h2 align="center">Ukupna cijena: {{ this.formatThousands(getTotalCijena) }} €</h2>
    <v-row>
      <v-col>
        <v-card-actions>
          <v-btn
          @click="buyCar"
          class="mx-auto"
          width="300"
          height="70"
          rounded
          outlined
          text
          color="green">
            Narudžba
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col>
        <v-card-actions>
          <v-btn
          class="mx-auto"
          width="300"
          height="70"
          rounded
          outlined
          text
          color="red"
          href="/">
            Poništavanje
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row> 
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import { doc, collection, setDoc, getFirestore } from "firebase/firestore"
import { getAuth } from "../../firebase"

export default {
  methods: {
    formatThousands(res){
        return new Intl.NumberFormat('en-US').format(res);
      },

    async buyCar(){
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getFirestore();
      const docData = {
        autoCijena: this.getAutoCijena,
        autoIme: this.getAutoIme,
        colorCijena: this.getColorCijena,
        colorIme: this.getColorName,
        engineCijena: this.getEngineCijena,
        engineIme: this.getEngineName,
        interiorCijena: this.getInteriorCijena,
        interiorIme: this.getInteriorName,
        rimCijena: this.getRimCijena,
        rimIme: this.getRimName,
        totalCijena: this.getTotalCijena,
        User: user.email
      };

      await setDoc(doc(collection(db, "narudzba")), docData);
      this.$router.push('/' + this.getAutoIme + '/success');
    }
  },

  computed: {
    ...mapGetters({
      getAutoIme: 'getAutoIme',
      getAutoCijena: 'getAutoCijena',
      getRimName: 'getRimName',
      getRimCijena: 'getRimCijena',
      getEngineName: 'getEngineName',
      getEngineCijena: 'getEngineCijena',
      getInteriorName: 'getInteriorName',
      getInteriorCijena: 'getInteriorCijena',
      getColorName: 'getColorName',
      getColorCijena: 'getColorCijena',
      getTotalCijena: 'getTotalCijena'
    })
  },
}
</script>