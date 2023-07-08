<template>
    <div>
    Korisničko ime: <input type="email" v-model="email" placeholder="Enter your email">
    <button @click="submitEmail">Submit</button>
    <p v-if="submitted">You entered: {{ email }}</p>
    <p v-if="!validEmail">Please enter a valid email address.</p>
    </div>
</template>

<script>
export default{
    name: "Login-View",
    data() {
        return {
        email: '',
        submitted: false,
        validEmail: true
        };
    },
    methods: {
        submitEmail() {
        if (this.isValidEmail()) {
            this.submitted = true;
        } else {
            this.validEmail = false;
        }
        },

        isValidEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(this.email);
        }
    }
}
</script>