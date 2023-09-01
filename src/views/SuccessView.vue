<template>
  <v-container>
    <h1 align="center">Vaša narudžba je zaprimljena!</h1>
    <v-divider class="my-5"></v-divider>
    <h2>Ovo je vaš kôd narudžbe: <b>{{ this.document }}</b><br>Zabilježite ga i dajte na pokaz u auto kući u koju se dostavlja.</h2><br>
    <v-divider class = "pa-10"></v-divider>
    <v-card-actions>
        <v-btn href="/" class="mx-auto" color="grey lighten-2">Povratak na početnu stranicu</v-btn>
    </v-card-actions>
    <img
    src="https://assets.stickpng.com/images/5ec3e47e58550c000442774c.png"
    class="mx-auto d-flex">
  </v-container>
</template>

<script>
import { getAuth } from "../../firebase"
import { collection, getFirestore, where, query, getDocs } from "firebase/firestore"
import { mapGetters } from "vuex"

export default {
    name: 'SuccessView',

    data: () =>({
        document: null
    }),

    methods: {
        async getDocName(){
            const collectionName = 'narudzba';
            const db = getFirestore();
            let userEmail = "No User";
            const auth = getAuth();
            const user = auth.currentUser;

            if(user){
                userEmail = user.email;
            }

            const q = query(collection(db, collectionName), 
            where('autoCijena', '==', this.getAutoCijena),
            where('autoIme', '==', this.getAutoIme),
            where('colorCijena', '==', this.getColorCijena),
            where('colorIme', '==', this.getColorName),
            where('engineCijena', '==', this.getEngineCijena),
            where('engineIme', '==', this.getEngineName),
            where('interiorCijena', '==', this.getInteriorCijena),
            where('interiorIme', '==', this.getInteriorName),
            where('lokacija', '==', this.getLokacija),
            where('rimCijena', '==', this.getRimCijena),
            where('rimIme', '==', this.getRimName),
            where('totalCijena', '==', this.getTotalCijena),
            where('user', '==', userEmail));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.document= doc.id;
            });
        }

    },

    mounted() {
        this.getDocName();
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
        getLokacija: 'getLokacija',
        getColorName: 'getColorName',
        getColorCijena: 'getColorCijena',
        getTotalCijena: 'getTotalCijena'
        })
    },
};
</script>