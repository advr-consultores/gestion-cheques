import Vue from 'vue'
import Vuex from 'vuex'

import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { getDatabase, ref, push, get, update, set, remove } from 'firebase/database'
import { getStorage, uploadBytes, ref as sRef, getDownloadURL, deleteObject } from 'firebase/storage'
import { getMessaging, getToken } from "firebase/messaging";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cheques: [],
    user: { accessToken: null, uid: null },
    uid: null,
    usuarios: [],
    personalAcargo: null,
    personalCreado: null,
    comentarios: [],
    notificaciones: []
  },
  mutations: {
    setCheques(state, payload) {
      state.cheques = payload
    },
    setCheque(state, payload) {
      state.cheques.push(payload)
    },
    setNotificaciones(state, payload) {
      state.notificaciones = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.usuarios = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setComentario(state, payload){
      state.comentarios.push(payload)
    },
    setComentarios(state, payload){
      state.comentarios = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    setUidUsuario(state, uid) {
      state.uid = uid
    },
    setPersonalAcargo(state, personal) {
      state.personalAcargo = personal
    },
    setPersonalCreado(state, personal) {
      state.personalCreado = personal
    },
    eliminarNotificacion(state, indexOf){
      state.notificaciones.splice(indexOf)
    }
  },
  actions: {
    async listarCheques({ commit }, { status, autor }) {
      try {
        const db = getDatabase()
        await get(ref(db, 'cheques')).then((data) => {
          const cheques = []
          const obj = data.val()
          for (let key in obj) {
            if((autor == obj[key].autor || autor == obj[key].usuarioCargo)  && status == Boolean(obj[key].statu)){
              cheques.push({
                'id': key,
                'nombre': obj[key].nombre,
                'estado': obj[key].estado,
                'municipio': obj[key].municipio,
                'descripcion': obj[key].descripcion,
                'imagenURL': obj[key].imagenURL,
                'fecha': new Date(obj[key].fecha).toLocaleDateString("es-ES"), 
                'cliente': obj[key].cliente,
                'recibo': obj[key].recibo,
                'statu': obj[key].statu,
                'sucursal': obj[key].sucursal,
                'usuarioCargo': obj[key].usuarioCargo,
                'autor': obj[key].autor
              })
            }
          }
          commit('setCheques', cheques)
        })
        return { 'message': 'Consulta satisfactoria.' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async verCheque({ commit }, { uid }) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'cheques/' + uid))
        const cheque = []
        const obj = data.val()
        for (let key in obj) {
          cheque.push({
            'id': key,
            'nombre': obj[key].nombre,
            'estado': obj[key].estado,
            'municipio': obj[key].municipio,
            'descripcion': obj[key].descripcion,
            'imagenURL': obj[key].imagenURL,
            'fecha': obj[key].fecha,
            'cliente': obj[key].cliente,
            'recibo': obj[key].recibo,
            'statu': obj[key].statu,
            'usuarioCargo': obj[key].usuarioCargo,
            'autor': obj[key].autor,
            'sucursal': obj[key].sucursal
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
    async registarCheque({ commit }, { nombre, cliente, estado, municipio, sucursal, imagen, descripcion, fecha, statu, usuarioCargo, autor }) {
      const db = getDatabase()
      const storage = getStorage()
      let key
      const filename = imagen.name
      const extension = filename.slice(filename.lastIndexOf('.'))
      await push(ref(db, 'cheques'), {
        'nombre': nombre,
        'cliente': cliente,
        'estado': estado,
        'municipio': municipio,
        'descripcion': descripcion,
        'fecha': fecha,
        'statu': statu,
        'usuarioCargo': usuarioCargo,
        'autor': autor,
        'sucursal': sucursal
      }).then((data) => {
        key = data.key
        return key
      }).then(key => {
        const imagenURL = imagen
        const spaceRef = sRef(storage, 'cheques/' + key)
        uploadBytes(spaceRef, imagenURL).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, 'cheques/' + key), {
              'imagenURL': url
            })
            commit('setCheque', {
              id: key, nombre, cliente, estado, municipio, sucursal, imagen, descripcion, fecha, statu, usuarioCargo, autor, imagenURL: url
            })
          })
        })
      }).catch((error) => {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      })
      return { 'message': 'Cheque creado correctamente.', 'uid': key, error: null }
    },
    async actualizarCheque(context, { uid, nombre, cliente, estado, municipio, imagen, descripcion, usuarioCargo, sucursal }) {
      const db = getDatabase()
      await update(ref(db, 'cheques/' + uid), {
        'nombre': nombre,
        'cliente': cliente,
        'estado': estado,
        'municipio': municipio,
        'descripcion': descripcion,
        'usuarioCargo': usuarioCargo,
        'sucursal': sucursal
      }).then(()=> {
        if(imagen != null){
          const storage = getStorage()
          // const filename = imagen.name
          // const extension = filename.slice(filename.lastIndexOf('.'))
          // const desertRef = sRef(storage, 'cheques/' + uid)
          // deleteObject(desertRef)
          const imagenURL = imagen
          const spaceRef = sRef(storage, 'cheques/' + uid)
          uploadBytes(spaceRef, imagenURL).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              update(ref(db, 'cheques/' + uid), {
                'imagenURL': url
              })
            })
          })
        }
      }).catch((error) => {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      })
      return { 'message': 'Cheque actulizado correctamente.' }
    },
    async eliminarCheque(context, { uid, extension }) {
      try {
        const db = getDatabase()
        await remove(ref(db, 'cheques/' + uid))
        const storage = getStorage()
        const desertRef = sRef(storage, `cheques/${uid}`)
        await deleteObject(desertRef)
        return { 'message': 'Eliminaci??n exitosa' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async subirRecibo(context, { uid, imagen, statu }) {
      try {
        const db = getDatabase()
        const storage = getStorage()
        const filename = imagen.name
        const extension = filename.slice(filename.lastIndexOf('.'))
        const spaceRef = sRef(storage, 'recibos/' + uid)
        await uploadBytes(spaceRef, imagen).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, 'cheques/' + uid), {
              'recibo': url,
              'statu': statu
            })
          })
        })
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async crearNotificaciones(context, { mensaje, tipo, uid, cheque, fecha }) {
      try {
        const db = getDatabase();
        await push(ref(db, 'notificaciones/' + uid), {
          'mensaje': mensaje,
          'tipo': tipo,
          'cheque': cheque,
          'fecha': fecha
        });
        return { 'message': 'ok' }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { 'message': errorMessage, 'code': errorCode }
      }
    },
    async obtenerNotificaciones({ commit }, uid) {
      try {
        const db = getDatabase()
        await get(ref(db, 'notificaciones/' + uid)).then((data) => {
          const notificaciones = []
          const obj = data.val()
          for (let key in obj) {
            notificaciones.push({
              'id': key,
              'mensaje': obj[key].mensaje,
              'tipo': obj[key].tipo,
              'cheque': obj[key].cheque,
              'fecha': obj[key].fecha
            })          
          }
          commit('setNotificaciones', notificaciones)
        })
        return { 'message': 'Consulta satisfactoria.' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async eliminarNotificacion({commit}, { uid, id, indice }){
      try {
        const db = getDatabase()
        await remove(ref(db, 'notificaciones/' + uid + '/' + id))
        commit('eliminarNotificacion', indice)
        return { 'message': '??Notificaci??n vista!' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async obtenerComentarios({commit}, comentario) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'comentarios/' + comentario.cheque))
        const objComentarios = data.val()
        const comentarios = []
        for (let key in objComentarios) {
          comentarios.push({
            'id': key,
            'usuario': objComentarios[key].usuario,
            'texto': objComentarios[key].texto,
          })
        }
        commit('setComentarios', comentarios)
        return { message: 'Consulta satisfactoria.' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async crearComentario({commit}, comentario) {
      try {
        const { idCheque,id,usuario,texto } = comentario
        const db = getDatabase();
        await set(ref(db, 'comentarios/' + idCheque + '/' + id), {
          usuario: usuario,
          texto: texto,
        });
        commit('setComentario', { id, usuario, texto })
        return { messageDatabase: 'Comentario agregados.' }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { messageDatabase: errorMessage, errorDatabase: errorCode }
      }
    },
    cerrarSesion({ commit }) {
      const auth = getAuth();
      signOut(auth).then(() => {
        commit('setUser', { accessToken: null, uid: null })
      }).catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
      });
    },
    async iniciarSesion({ commit, dispatch }, { email, password }) {
      try {
        const auth = getAuth();
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        if (auth.currentUser.emailVerified) {
          const newUser = {
            id: user.uid,
            accessToken: user.accessToken
          }
          return { message: 'Inicio de cesi??n exitoso.' }
        }
        dispatch('cerrarSesion')
        return { message: 'No se ha verificado su correo.', error: 'Error (autenticaci??n/verificacion).' }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { message: 'Error (autenticaci??n/contrase??a incorrecta).', error: errorCode }
      }
    },
    async crearUsuarioEmailPassword({ dispatch }, { email, password, nombre, administrador }) {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
        const { messageVerificacion, errorVerificacion } = await dispatch('enviarCorreoVerificacion')
        const { currentUser } = auth
        const { messageDatabase, errorDatabase } = await dispatch('crearUsuario', { uid: currentUser.uid, administrador, nombre, email })
        return {
          message: 'Usuario creado con email',
          messageVerificacion: messageVerificacion,
          errorVerification: errorVerificacion,
          messageDatabase: messageDatabase,
          errorDatabase: errorDatabase
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { message: errorMessage, error: errorCode }
      }
    },
    async obtenerUsuario(context) {
      try {
        const auth = getAuth();
        const { currentUser } = auth
        const db = getDatabase()
        const data = await get(ref(db, 'usuarios/' + currentUser.uid))
        const objUsuario = data.val()
        return { username: objUsuario.username, administrador: objUsuario.administrador }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async obtenerPersonalAcargo({ commit }, { uid }) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'usuarios/' + uid))
        const objUsuario = data.val()
        commit('setPersonalAcargo', objUsuario.username)
      } catch (error) {
        commit('setPersonalAcargo', 'Anonimo')
      }
    },
    async obtenerPersonalCreado({ commit }, { uid }) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'usuarios/' + uid))
        const objUsuario = data.val()
        commit('setPersonalCreado', objUsuario.username)
      } catch (error) {
        commit('setPersonalCreado', 'Anonimo')
      }
    },
    async obtenerUsuarios({ commit }) {
      try {
        const db = getDatabase()
        const data = await get(ref(db, 'usuarios'))
        const objUsuarios = data.val()
        const usuarios = []
        for (let key in objUsuarios) {
          if(!objUsuarios[key].administrador) {
            usuarios.push({
            id: key,
            administrador: objUsuarios[key].administrador,
            email: objUsuarios[key].email,
            username: objUsuarios[key].username
            })
          }
        }
        commit('setUsers', usuarios)
        return { message: 'Consulta satisfactoria' }
      } catch (error) {
        const messageError = error.message
        const codeError = error.code
        return { 'message': messageError, 'code': codeError, 'error': messageError }
      }
    },
    async crearUsuario(context, usuario) {
      try {
        const db = getDatabase();
        await set(ref(db, 'usuarios/' + usuario.uid), {
          username: usuario.nombre,
          email: usuario.email,
          administrador: usuario.administrador
        });
        return { messageDatabase: 'Usuario creado.' }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { messageDatabase: errorMessage, errorDatabase: errorCode }
      }
    },
    async enviarCorreoVerificacion(context) {
      const auth = getAuth();
      try {
        await sendEmailVerification(auth.currentUser)
        return { messageVerificacion: 'Se envi?? un correo de verificaci??n.' }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { messageVerificacion: errorMessage, errorVerificacion: errorCode }
      }
    },
    async autoSignIn({ commit, dispatch }, { uid, accessToken }) {
      const { username, administrador } = await dispatch('obtenerUsuario')
      commit('setUser', { uid, accessToken, username, administrador })
    },
    async requestPermission(context, messaging){
      // const messaging = getMessaging();
      await getToken(messaging, { vapidKey: ''})
      .then((currentToken) => {
        if (currentToken) {
          console.log('client token', currentToken)
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      })      
    },
    async enviarCorreoRestablecimiento(context, email){
      const auth = getAuth();
      try {
        await sendPasswordResetEmail(auth, email)
        return { 'message': '!Correo electr??nico de restablecimiento de contrase??a enviado!'}
        
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { 'message': errorMessage, 'error': errorCode }
      }
    }
  },
  getters: {
    getCheques(state) {
      return state.cheques.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    getCheque(state) {
      return (meetupId) => {
        return state.cheques.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    getUid: (state) => state.user.uid,
    getIfUsuarioAuth: (state) => Boolean(state.user.accessToken),
    isAdmin: (state) => state.user.administrador,
    getNombreUsuario:(state) => state.user.username,
    getUsuarios: (state) => state.usuarios,
    getPersonalAcargo: (state) => state.personalAcargo,
    getPersonalCreado: (state) => state.personalCreado,
    getComentarios:(state) => state.comentarios,
    getNotificacones:(state) => state.notificaciones
  }
})
