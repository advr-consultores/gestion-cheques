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
  apiKey: "AIzaSyA6PVuL0dHNMI-izit0MEnDa_1lgZletNo",
  authDomain: "cheque-dbb5e.firebaseapp.com",
  databaseURL: "https://cheque-dbb5e-default-rtdb.firebaseio.com",
  projectId: "cheque-dbb5e",
  storageBucket: "gs://cheque-dbb5e.appspot.com",
  messagingSenderId: "288142005646",
  appId: "1:288142005646:web:8d0a8b6929b0a3667b40df"
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
