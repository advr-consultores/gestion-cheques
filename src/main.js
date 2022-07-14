import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseMessaging, auth } from './firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        if(user.emailVerified){
          this.$store.dispatch('autoSignIn', user)
          // this.$store.dispatch('requestPermission', firebaseMessaging)
          this.$store.dispatch('obtenerNotificaciones', user.uid)
        }
      }
    })
  },
}).$mount('#app')
