<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="blue accent-4" dark>
      <v-toolbar-title>Usuarios</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <CrearUsuario v-if="userIsAuthenticated && isAdmin" />
    </v-toolbar>

    <v-list subheader>
      <v-subheader>Personal</v-subheader>

      <v-list-item v-for="usuario in usuarios" :key="usuario.id">
        <v-list-item-avatar>
          <v-avatar color="brown">
            <span class="white--text text-h5">
              {{ usuario.username[0].toUpperCase() }}
            </span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="usuario.username"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Administradores</v-subheader>

      <v-list-item v-for="usuario in usuarios" :key="usuario.id">
        <v-list-item-avatar>
          <v-avatar color="brown">
            <span class="white--text text-h5">{{
              usuario.username[0].toUpperCase()
            }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="usuario.username"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import CrearUsuario from "../components/CrearUsuario.vue";
export default {
  components: {
    CrearUsuario,
  },
  computed: {
    usuarios() {
      return this.$store.getters.getUsuarios;
    },
    userIsAuthenticated() {
      return this.$store.getters.getIfUsuarioAuth;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      this.$store.dispatch("obtenerUsuarios");
    },
  },
};
</script>