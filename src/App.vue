<template>
  <v-app>
    <div>
      <v-toolbar dark class="primary">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Cheque</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-if="userIsAuthenticated && isAdmin" @click="$router.push({name: 'Usuarios'})">
            <v-icon left dark>mdi-account-outline</v-icon>
            Usuario
          </v-btn>
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
  export default {
    name: "App",
    computed: {
      userIsAuthenticated(){ return this.$store.getters.getIfUsuarioAuth },
      isAdmin(){ return this.$store.getters.isAdmin }
      
    },
    methods: {
      cerrarSesion() {
        this.$store.dispatch("cerrarSesion");
        this.$router.push("/login");
      },
      cerrarSesions() {
        this.$store.dispatch("send", {email: 'davidflorescheques@gmail.com'});
      },
    },
  };
</script>
