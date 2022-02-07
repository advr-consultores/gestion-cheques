import Vue from 'vue'
import Vuex from 'vuex'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref, push, get, update} from 'firebase/database'
import { getStorage, uploadBytes, ref as sRef, getDownloadURL } from 'firebase/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        nombre: 'Cheque #1',
        fecha: new Date(),
        cliente: 'BBVA',
        descripcion: 'New York, New York!'
      },
      {
        imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        nombre: 'Cheque #2',
        fecha: new Date(),
        cliente: 'Movi',
        descripcion: 'It\'s Paris!'
      }
    ],
    user: null,
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    loadMeetups ({commit}) {
      commit('setLoading', true)
      const db = getDatabase()
      get(ref(db, 'cheques')).then((data) => {
        const meetups = []
        const obj = data.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            nombre: obj[key].nombre,
            descripcion: obj[key].descripcion,
            imagenURL: obj[key].imagenURL,
            fecha: obj[key].fecha,
            cliente: obj[key].cliente,
          })
        }
        commit('setLoadedMeetups', meetups)
        commit('setLoading', false)
      })
      .catch(
        (error) => {
          console.log(error)
          commit('setLoading', false)
        }
      )
    },
    createMeetup({ commit, getters }, payload) {
      const meetup = {
        nombre: payload.nombre,
        cliente: payload.cliente,
        imagen: payload.imagen,
        descripcion: payload.descripcion,
        fecha: '',
        // creatorId: getters.user.id
      }
      const db = getDatabase()
      const storage = getStorage();
      let imagenURL
      let key
      const filename = payload.imagen.name
      const extension = filename.slice(filename.lastIndexOf('.'))
      push(ref(db, 'cheques'), { 
        nombre: payload.nombre,
        cliente: payload.cliente,
        descripcion: payload.descripcion,
        fecha: '2222-22-22',
      }).then((data) => {
        key = data.key
        return key
      }).then(key => {
        const file = payload.imagen
        const storageRef = sRef(storage, 'fotos/' + key + extension)
        return uploadBytes(storageRef, file)
      })
      .then(() => {
        const starsRef = sRef(storage, 'fotos/' + key + extension);

        // Get the download URL
        getDownloadURL(starsRef)
          .then((url) => {
            update(ref(db, 'cheques/' + key), {
              imagenURL: url
            });
          })
        
      }).then(() =>{
        commit('createMeetup', {
          ...meetup,
          imagenURL: imagenURL,
          id: key
        })
      })
      .catch((error) => {
        const messageError = error.message
        const codeError = error.code
        alert(messageError, codeError)
      })
      // Reach out to firebase and store it
    },
    cerrarSesion({commit}) {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        commit('setUser', null)
      }).catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
      });
    },
    iniciarSesion({ commit }, payload) {
      const auth = getAuth();
      const { email, password } = payload
      commit('setLoading', true)
      commit('clearError')
      signInWithEmailAndPassword(auth, email, password).then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      ).catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Error (autenticación/contraseña incorrecta).')
        }
      )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user(state) {
      return state.user
    }
  }
})
