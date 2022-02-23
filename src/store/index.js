import Vue from 'vue'
import Vuex from 'vuex'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref, push, get, update, set, remove } from 'firebase/database'
import { getStorage, uploadBytes, ref as sRef, getDownloadURL, deleteObject } from 'firebase/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cheques: [],
    user: null,
  },
  mutations: {
    setCheques(state, payload) {
      state.cheques = payload
    },
    setCheque(state, payload) {
      state.cheques.push(payload)
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
    listarCheques({commit}) {
      const db = getDatabase()
      get(ref(db, 'cheques')).then((data) => {
        const cheques = []
        const obj = data.val()
        for (let key in obj) {
          cheques.push({
            'id': key,
            'nombre': obj[key].nombre,
            'descripcion': obj[key].descripcion,
            'imagenURL': obj[key].imagenURL,
            'fecha': obj[key].fecha,
            'cliente': obj[key].cliente,
            'recibo': obj[key].recibo,
            'statu': obj[key].statu,
          })
        }
        commit('setCheques', cheques)
      }).catch((error) => { return { 'message': messageError, 'code': codeError, 'error': messageError } })
      return { 'message': 'Consulta satisfactoria.' }
    },
    async verCheque({commit}, { uid }) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'cheques/' + uid))
        const cheque = []
        const obj = data.val()
        for (let key in obj) {
          cheque.push({
            'id': key,
            'nombre': obj[key].nombre,
            'descripcion': obj[key].descripcion,
            'imagenURL': obj[key].imagenURL,
            'fecha': obj[key].fecha,
            'cliente': obj[key].cliente,
            'recibo': obj[key].recibo,
            'statu': obj[key].statu,
          })
        }
        commit('setCheque', cheque)
        return { 'message': 'Consulta satisfactoria.' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async registarCheque({ commit }, { nombre, cliente, imagen, descripcion, fecha, statu }) {
      const db = getDatabase()
      const storage = getStorage()
      let key
      const filename = imagen.name
      const extension = filename.slice(filename.lastIndexOf('.'))
      await push(ref(db, 'cheques'), { 
        'nombre': nombre,
        'cliente': cliente,
        'descripcion': descripcion,
        'fecha': fecha,
        'statu': statu
      }).then((data) => {
        key = data.key
        return key
      }).then(key => {
        const imagenURL = imagen
        const spaceRef = sRef(storage, 'cheques/' + key + extension)
        uploadBytes(spaceRef, imagenURL).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, 'cheques/' + key), {
              'imagenURL': url
            })
          })
        })
      }).catch((error) => {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      })
      return { 'message': 'Cheque creado correctamente.', 'uid': key }
    },
    async actualizarCheque({ commit }, { nombre, cliente, imagenURL, descripcion, fecha, statu }) {
      const db = getDatabase()
      await set(ref(db, 'cheques'), { 
        'nombre': nombre,
        'cliente': cliente,
        'descripcion': descripcion,
        'imagenURL': imagenURL,
        'fecha': fecha,
        'statu': statu
      }).catch((error) => {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      })
      return { 'message': 'Cheque actulizado correctamente.' }
    },
    async eliminarCheque({ commit }, { uid, extension }) {
      try {
        const db = getDatabase()
        await remove(ref(db, 'cheques/' + uid))
        const storage = getStorage()
        const desertRef = sRef(storage, `cheques/${uid}.${extension}`)
        await deleteObject(desertRef)
        return { 'message': 'Eliminación exitosa' }
      } catch(error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async subirRecibo(context, { uid, imagen, statu }){
      try {
        const db = getDatabase()
        const storage = getStorage()
        const filename = imagen.name
        const extension = filename.slice(filename.lastIndexOf('.'))
        const spaceRef = sRef(storage, 'recibos/' + uid + extension)
        await uploadBytes(spaceRef, imagen).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, 'cheques/' + uid), {
              'recibo': url,
              'statu': statu
            })
          })
        })
      } catch(error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    cerrarSesion({commit}) {
      const auth = getAuth();
      signOut(auth).then(() => {
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
    getCheques(state) {
      return state.cheques.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.cheques.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user(state) {
      return state.user
    }
  }
})