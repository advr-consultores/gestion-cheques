<template>
  <v-app>
    <div>
      <v-toolbar dark class="primary">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Cheque</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <CrearUsuario v-if="userIsAuthenticated && isAdmin"/>
          <v-btn v-if="userIsAuthenticated" @click="cerrarSesion">
            <v-icon left dark>mdi-logout</v-icon>
            Salir
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <v-main class="grey">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <br>
        <v-row v-if="userIsAuthenticated" justify="space-around" >
          <v-btn color="green" fab large dark @click="$router.go(0)"><v-icon large>
          mdi-reload
        </v-icon></v-btn>
        
        </v-row>
    </v-main>
  </v-app>
</template>

<script>
  import CrearUsuario from "./components/CrearUsuario.vue";
  export default {
    name: "App",
    components: {
      CrearUsuario
    },
    computed: {
      userIsAuthenticated() {
        return (
          this.$store.getters.user !== null &&
          this.$store.getters.user !== undefined
        );
      },
      isAdmin() {
        if (this.$store.getters.getUid == 'DlAlG0tRo6MJH1JOb7e3kASaIOY2') {
          return true
        } return false
      }
    },
    methods: {
      cerrarSesion() {
        this.$store.dispatch("cerrarSesion");
        this.$router.push("/login");
      },
    },
  };
</script>
