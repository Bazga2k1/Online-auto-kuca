<template>
  <v-container class="pa-5 my-2">
    <v-card class="pa-8 max-width=400 outlined">
      <v-card-title class="font-weight-bold text-h5">Registracija</v-card-title>
      <v-divider class="pa-2"></v-divider>

      <v-form v-model="valid" ref="form" @submit.prevent="registerUser">
        <v-text-field
          v-model="companyName"
          :rules="[rules.required]"
          label="Ime firme"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="ownerFullName"
          :rules="[rules.required]"
          label="Ime i prezime vlasnika"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="userOIB"
          :rules="[rules.required, rules.oibValidation]"
          label="OIB"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="E-pošta"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          label="Lozinka"
          type="password"
          outlined
          required
        ></v-text-field>

        <v-btn :disabled="!valid" @click="registerUser" color="primary">Registrirajte se</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valid: false,
      companyName: '',
      ownerFullName: '',
      userOIB: '',
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Obavezno polje',
        email: value => {
          const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
          return pattern.test(value) || 'E-mail nevažeći';
        },
        min: value => value.length >= 6 || 'Lozinka mora biti duga minimalno 6 znakova.',
        oibValidation: value => {
          const oibPattern = /^[0-9]{11}$/;
          return oibPattern.test(value) || 'Nevažeći OIB (mora imati 11 znamenki)';
        }
      }
    };
  },
  methods: {
    async registerUser() {
      if (this.$refs.form.validate()) {
        const userData = {
          companyName: this.companyName,
          ownerFullName: this.ownerFullName,
          userOIB: this.userOIB,
          email: this.email,
          password: this.password,
        };

        try {
			await axios.post('https://online-auto-kuca-backend.onrender.com/register', userData);
			console.log('User registered:', response.data);
			const response = await axios.post('https://online-auto-kuca-backend.onrender.com/login', { email: this.email, password: this.password, });
			localStorage.setItem('token', response.data.token);
			alert('User registered successfully');
			this.$router.push("/");
		} catch (error) {
			console.error('Error registering user:', error);
			alert('Registration failed. Please try again.');
		}
      } else {
        console.log('Form is invalid, cannot register.');
      }
    }
  }
};
</script>