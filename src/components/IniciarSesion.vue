<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>Iniciar sesión en ADVR Cheques</v-card-title>
    <v-card-text>
      <form @submit.prevent="onSignin">
        <v-text-field
          label="Correo electronico"
          v-model="email"
          type="email"
          required
        />
        <v-text-field
          name="password"
          label="Password"
          id="password"
          v-model="password"
          type="password"
          required
        />
        <v-card-actions>
          <v-spacer/>
          <v-btn
          type="submit"
          color="success"
          :disabled="loading"
          :loading="loading"
        >
          Iniciar Sesion
        </v-btn>
        </v-card-actions>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onSignin() {
      this.$store.dispatch("iniciarSesion", {
        email: this.email,
        password: this.password,
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>