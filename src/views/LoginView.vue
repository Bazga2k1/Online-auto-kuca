<template>
	<v-container fill-height fluid class="background">
		<v-row align="center" justify="center">
			<v-col align="center" justify="center" cols="12">
				<v-card class="card-border" width="600px" outlined>
					<v-card-title align="left">Prijava</v-card-title>
					<v-card-subtitle align="left">
						Unesite Vaše podatke
					</v-card-subtitle>
					<v-card-text class="card-text-border">
						<v-form v-model="valid">
							<v-text-field
								v-model="email"
								dense
								label="E-mail firme"
								clearble
								type="email"
								:rules="[rules.required, rules.email]"
								outlined></v-text-field>
							<v-text-field
								v-model="password"
								dense
								label="Zaporka"
								clearble
								:append-icon="
									showIcon ? 'mdi-eye' : 'mdi-eye-off'
								"
								:rules="[rules.required, rules.min]"
								:type="showIcon ? 'text' : 'password'"
								outlined></v-text-field>
						</v-form>
						<v-btn
							@click="openDialog"
							class="link-left"
							text
							x-small
							color="blue">
							Zaboravili ste lozinku?
						</v-btn>
						<v-btn
							outlined
							x-small
							color="orange lighten-1"
							to="/registracija_firme">
							Nemate račun za firmu? Registrirajte se ovdje
						</v-btn>
					</v-card-text>
					<v-card-actions class="card-actions">
						<v-btn
							@click="login"
							:disabled="isButtonDisabled"
							outlined>
							OK
						</v-btn>
					</v-card-actions>
				</v-card>
				<v-dialog
					width="300px"
					outlined
					persistent
					v-model="passwordIssuesDialog">
					<v-card class="card-border">
						<v-card-title>E-mail</v-card-title>
						<v-card-subtitle>
							Unesite Vaš E-mail
						</v-card-subtitle>
						<v-card-text>
							<v-text-field
								v-model="emailForPassword"
								dense
								label="E-mail firme"
								clearble
								type="text"
								:rules="[rules.required, rules.email]"
								outlined></v-text-field>
						</v-card-text>
						<v-card-actions class="card-actions">
							<v-btn
								class="btn-right-margin"
								color="red darken-3"
								outlined
								text
								small
								@click="closeDialog">
								CLOSE
							</v-btn>
							<v-btn
								outlined
								text
								@click="resetPassword(emailForPassword)">
								SEND
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import {
	auth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "../../firebase.js";
export default {
	name: 'LoginView',
	components: {},
	watch: {
		valid: function (newVal) {
			if (newVal != true) {
				this.isButtonDisabled = true;
			} else {
				this.isButtonDisabled = false;
			}
		},
	},
	data() {
		return {
			emailForPassword: null,
			passwordIssuesDialog: false,
			isButtonDisabled: false,
			valid: true,
			email: null,
			password: null,
			showIcon: false,
			rules: {
				required: (value) => !!value || "Obavezno polje",
				min: (v) => v?.length >= 6 || "Minimalno 6 znakova",
				email: (v) =>
					!v ||
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail mora biti postojeći",
			},
		};
	},
	methods: {
		login() {
			let email = this.email;
			let password = this.password;
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					this.$router.push("/");
				})
				.catch((error) => {
					alert(error.message);
				});
		},
		resetPassword(email) {
			sendPasswordResetEmail(auth, email)
				.then(() => {
					console.log("E-mail poslan");
				})
				.catch((error) => {
					alert(error.message);
				});
			this.closeDialog();
		},
		postActionMoveToView() {
			this.$router.push({ path: "/" });
		},
		closeDialog() {
			this.passwordIssuesDialog = false;
		},
		openDialog() {
			this.passwordIssuesDialog = true;
		},
	},
	created() {},
	mounted() {},
	destroyed() {},
};
</script>

<style>

</style>