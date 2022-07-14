<template>
  <v-card class="mx-auto container" max-width="500">
    <form @submit.prevent="onSignin()">
      <v-card-title class="grey lighten-2" v-if="!cambiarPWD">Iniciar sesión en ADVR Cheques</v-card-title>
      <v-card-title class="grey lighten-2" v-else>Encuentra tu cuenta</v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle v-if="cambiarPWD">
      Ingrese su correo electrónico para enviar un correo electrónico de restablecimiento de contraseña.
      </v-card-subtitle>
      <v-card-text>
        <v-text-field
          label="Correo electronico"
          v-model="email"
          type="email"
          required
        />
        <v-text-field
          v-if="!cambiarPWD"
          name="password"
          label="Contraseña"
          id="password"
          v-model="password"
          type="password"
          required
        />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions v-if="!cambiarPWD">
        <v-btn
          type="submit"
          color="success"
          :disabled="loading"
          :loading="loading"
          block
          v-text="'Iniciar sesión'"
        />
      </v-card-actions>
      <v-card-actions v-else>
        <v-spacer></v-spacer>
        <v-btn v-text="'Cancelar'" @click="cambiarPWD = !cambiarPWD" color="gray" />
        <v-btn v-text="'Enviar'" @click="enviarCorreo()" color="primary" />
      </v-card-actions>
      <div class="center">
        <v-btn
          v-if="!cambiarPWD"
          v-text="'¿Olvidaste tu contraseña?'"
          text
          color="primary"
          @click="cambiarPWD = !cambiarPWD"
        />
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      cambiarPWD: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getIfUsuarioAuth;
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
      if (value) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    async onSignin() {
      const { message, error } = await this.$store.dispatch("iniciarSesion", {
        email: this.email,
        password: this.password,
      });
      if (error) {
        alert(message);
        return;
      }
      alert(message);
    },
    async enviarCorreo() {
      const { email } = this
      const { message, error } = await this.$store.dispatch("enviarCorreoRestablecimiento", email);
      if (error) {
        alert(message);
        return;
      }
      alert(message);
      this.cambiarPWD = !this.cambiarPWD
    },
  },
};
</script>

<style>
.center {
  text-align: center;
}
</style>