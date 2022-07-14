<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary mp-5" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-comment</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Comentarios</v-toolbar-title>
        </v-toolbar>
        <div id="app">
          <div class="comments-outside">
            <div class="comments-header">
              <div class="comments-stats">
                <span><v-icon>mdi-comment</v-icon> {{ comentarios.length }}</span>
              </div>
              <div class="post-owner">
                <v-avatar color="brown">
                  <span class="white--text text-h5">{{
                    nombreUsuario[0].toUpperCase()
                  }}</span>
                </v-avatar>
              </div>
            </div>
            <comments
              :comments_wrapper_classes="[
                'custom-scrollbar',
                'comments-wrapper',
              ]"
              :comments="comentarios"
              :current_user="nombreUsuario"
              @submit-comment="submitComment"
            ></comments>
          </div>
        </div>
      </v-card>
    </v-dialog>
</template>

<script>
import Comments from "./Comentario.vue";
export default {
  props: {
    idCheque: { type: String, default: "" },
  },
  components: {
    Comments,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    nombreUsuario() {
      return this.$store.getters.getNombreUsuario;
    },
    comentarios(){
      return this.$store.getters.getComentarios;
    },
    cheque() {
      if(this.idCheque){
        return this.$store.getters.getCheque(this.idCheque);
      } return null
    },
    usuario() { return this.$store.getters.getUid; },
  },
  created() {
    this.obtenerComentariosCheque()
  },
  methods: {
    submitComment: async function (reply) {
      const comentario = {
        idCheque: this.idCheque,
        id: this.comentarios.length + 1,
        usuario: this.nombreUsuario,
        texto: reply,
      };
      const {message, error} = await this.$store.dispatch('crearComentario', comentario)
      if(error){
        alert(message)
        return
      } else{
        if (this.usuario != this.cheque.usuarioCargo){
            const fecha = new Date(
              new Date().getTime() - new Date().getTimezoneOffset() * 60000
            ).toISOString();
            const usuario_autor = this.$store.getters.getNombreUsuario
            const mensaje_notificacion = this.nombreUsuario + ' comento el cheque: ' + this.cheque.nombre + '.'
            const notificacion = {
              'mensaje': mensaje_notificacion,
              'tipo': 'Comentario',
              'uid': this.cheque.usuarioCargo,
              'cheque': this.idCheque,
              'fecha': fecha
            }
            const { mensaje, usuario, error } = await this.$store.dispatch(
              "crearNotificaciones",
              notificacion
            );
        }
        if (this.usuario != this.cheque.autor){
            const fecha = new Date(
              new Date().getTime() - new Date().getTimezoneOffset() * 60000
            ).toISOString();
            const usuario_autor = this.$store.getters.getNombreUsuario
            const mensaje_notificacion = this.nombreUsuario + ' comento el cheque: ' + this.cheque.nombre + '.'
            const notificacion = {
              'mensaje': mensaje_notificacion,
              'tipo': 'Comentario',
              'uid': this.cheque.autor,
              'cheque': this.idCheque,
              'fecha': fecha
            }
            const { mensaje, usuario, error } = await this.$store.dispatch(
              "crearNotificaciones",
              notificacion
            );
        }
      }
    },
    async obtenerComentariosCheque(){
      const {message, error} = await this.$store.dispatch('obtenerComentarios', {cheque: this.idCheque})
      if (error){
        alert(message)
      }
    }
  },
};
</script>

<style>
a {
  text-decoration: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}
.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 600px;
}
.comments-header {
  background-color: #c8c8c8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}
.comments-header .comments-stats span {
  margin-left: 10px;
}
.post-owner {
  display: flex;
  align-items: center;
}
.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.post-owner .username {
  margin-left: 5px;
}
.post-owner .username > a {
  color: #333;
}
</style>