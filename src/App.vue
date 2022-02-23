<template>
  <v-app>
    <div>
      <v-toolbar dark class="primary">
        <v-app-bar-nav-icon @click="sideNav = !sideNav" ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Cheque</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-btn v-if="userIsAuthenticated" @click='cerrarSesion'>
            <v-icon left dark >mdi-logout</v-icon>
            Salir
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sideNav: false
  }),

  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'mdi-login', title: 'Sign in', link: '/login'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          // {icon: 'mdi-cash', title: 'Cheques', link: '/cheques'},
          // {icon: 'mdi-new-box', title: 'Nuevo', link: '/cheque/nuevo'},
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    cerrarSesion() {
      this.$store.dispatch('cerrarSesion')
      this.$router.push('/login')
    }
  }
};
</script>
