import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNTExAc8-cRl1aBzJokUwjW5lW534sovY",
  authDomain: "chequesadvr.firebaseapp.com",
  projectId: "chequesadvr",
  storageBucket: "chequesadvr.appspot.com",
  messagingSenderId: "825162486096",
  appId: "1:825162486096:web:46ae51a99cb5ccc6e31c55",
  measurementId: "G-0S7RENS99H"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    app
    onAuthStateChanged(auth,(user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('listarCheques')
  },
}).$mount('#app')
