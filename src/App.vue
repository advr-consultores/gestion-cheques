<template>
  <v-app>
    <v-app-bar app color="blue" v-if="userIsAuthenticated">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-row justify="center">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"><v-icon>mdi-home</v-icon></router-link>
        </v-toolbar-title>
      </v-row>
      <notificacuiones />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary class="blue accent-1">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://icons-for-free.com/download-icon-female+person+user+woman+young+icon-1320196266256009072_512.png"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ username }}</v-list-item-title>
            <v-list-item-subtitle>Conectado</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in itemsv2"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            color="error"
            v-if="userIsAuthenticated"
            @click="cerrarSesion"
          >
            Cerrar Sesión
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="grey">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import notificacuiones from './components/Notificaciones.vue'
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [{ title: "Usuarios", icon: "mdi-account" }],
    itemsv2: [
      { title: "Inicio", icon: "mdi-home", link: "/" },
      { title: "Seguridad", icon: "mdi-key", link: "" },
    ],
  }),
  components: {
    notificacuiones
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.getIfUsuarioAuth;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    username() {
      return this.$store.getters.getNombreUsuario;
    },
  },
  methods: {
    cerrarSesion() {
      this.$store.dispatch("cerrarSesion");
      this.$router.push("/login");
    },
  },
};
</script>
