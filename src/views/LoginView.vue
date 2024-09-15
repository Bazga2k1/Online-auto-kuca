<template>
	<v-container class="pa-5 my-10">
		<v-card class="pa-10">
			<v-card-title>Prijava</v-card-title>
			<v-card-text>
				<v-form @submit.prevent="loginUser">
				<v-text-field v-model="email" label="E-pošta" />
				<v-text-field v-model="password" label="Zaporka" type="password" />
				<v-btn type="submit">Prijava</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import store from '@/store';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    ...mapActions('auth', ['login']),

    async loginUser() {
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        await this.login(userData);
        store.state.user = userData.email;
        this.$router.push('/');
      } catch (error) {
        alert("Greška u prijavi");
        console.error('Login error:', error);
      }
    },
  },
};
</script>