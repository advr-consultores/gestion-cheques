<template>
  <v-row dense justify="center">
    <v-col cols="auto">
      <v-card color="#1F7087" dark class="mx-auto">
        <v-card-actions>
          <v-btn fab x-small @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon> </v-btn>
          <v-spacer />
          <FormularioAgregarRecibo v-if="isAdmin || isAcargo" :id="id" />
        </v-card-actions>
        <v-card-title>
          {{ cheque.nombre }}
        </v-card-title>
        <v-img
          :src="cheque.imagenURL"
          height="400px"
          @click="setImagen(cheque.imagenURL)"
        ></v-img>
        <v-card-text class="font-weight-bold">
          <div>
            Cliente: {{ cheque.cliente }}<br />
            Sucursal: {{ cheque.sucursal }} <br>
            Municipio: {{ cheque.municipio }} ({{ cheque.estado }})<br />
            Publicado: {{ cheque.fecha }} <br>
            Autor: {{ creado }} <br>
            Responsable: {{ acargo }}
          </div>
          <p class="text-h5 text--primary">{{ cheque.descripcion }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
           <v-row align="center" justify="space-around" no-gutters>

             <Comentarios :idCheque="id" />
             <ActualizarCheque
               :id="id"
               :cliente="cheque.cliente"
               :nombre="cheque.nombre"
               :descripcion="cheque.descripcion"
               :imagenURL="cheque.imagenURL"
               :autor="cheque.autor"
               :deshabilitar = "!isAdmin && !isAcargo"  
             />
             <v-btn
               class="error"
               @click="eliminarCheque()"
               :disabled="!isAdmin && !isAcargo"
               ><v-icon>mdi-delete</v-icon></v-btn
             >
           </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card color="#1F7087" class="mx-auto" dark v-if="cheque.statu">
        <v-card-title>Estado del cheque: {{ cheque.statu }}</v-card-title>
        <v-item-group multiple>
          <v-row no-gutters>
            <v-col>
              <v-item v-slot="{ active }">
                <v-img
                  :src="cheque.recibo"
                  height="300"
                  class="text-right pa-2"
                  @click="setImagen(cheque.recibo)"
                >
                  <v-btn icon>
                    <v-icon>
                      {{ active ? "mdi-close-outline" : "mdi-close" }}
                    </v-icon>
                  </v-btn>
                </v-img>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card>
    </v-col>
    <v-col cols="auto" class="d-flex flex-column justify-space-between align-center">
      <v-overlay :z-index="zIndex" :value="overlay">
        <v-slider
          v-model="width"
          class="align-self-stretch"
          min="200"
          max="500"
          step="1"
        />
        <v-img :src="img" :width="width" @click="overlay = false"></v-img>
      </v-overlay>
    </v-col>
  </v-row>
</template>

<script>
import FormularioAgregarRecibo from "@/components/AgregarRecibo.vue";
import Comentarios from "@/components/Comentarios.vue"
import ActualizarCheque from '@/components/ActualizarCheque.vue'
export default {
  components: {
    FormularioAgregarRecibo,
    Comentarios,
    ActualizarCheque
  },
  props: {
    id: { type: String, default: "" },
  },
  data: () => ({
    overlay: false,
    zIndex: 0,
    img: null,
    width: 200,
    personal:null,
    options: {weekday: "long", year: "numeric", month: "long", day: "numeric"}
  }),
  computed: {
    cheque() {
      return this.$store.getters.getCheque(this.id);
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isAcargo() {
      if (this.$store.getters.getUid == this.cheque.usuarioCargo || this.$store.getters.getUid == this.cheque.autor) {
        return true;
      }
      return false;
    },
    creado(){
      const { cheque } = this
      this.getPersonalCreado(cheque.autor)
      return this.$store.getters.getPersonalCreado
    },
    acargo(){
      const { cheque } = this
      this.getPersonalAcargo(cheque.usuarioCargo)
      return this.$store.getters.getPersonalAcargo
    },
    usuario() {
      return this.$store.getters.getUid;
    },
  },
  created() {
    this.verCheque();
  },
  methods: {
    async verCheque() {
      const { id } = this;
      const { message, error } = await this.$store.dispatch("verCheque", {
        uid: id,
      });
      if (error) {
        alert(message);
        return;
      }
    },
    async eliminarCheque() {
      let isEliminar = confirm("Estas a punto de eliminar este cheque.");
      if (isEliminar) {
        const { id, cheque } = this;
        // const extensionFile = cheque.imagenURL.match(/.*\/([^/]+)\.([^?]+)/i)[2];
        const { message, error } = await this.$store.dispatch("eliminarCheque", {
          uid: id,
          extension: 'png'
        });
        if (error) {
          alert(message);
          return;
        }
        else {
          alert(message);
          const fecha = new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
          ).toISOString();
          if (this.usuario != cheque.usuarioCargo){
            const usuario_autor = this.$store.getters.getNombreUsuario
            const mensaje_notificacion = usuario_autor + ' elimino el cheque: ' + cheque.nombre + '.'
            const notificacion = {
              'mensaje': mensaje_notificacion,
              'tipo': 'Eliminado',
              'uid': cheque.usuarioCargo,
              'cheque': cheque.id,
              'fecha': fecha
            }
            const { mensaje, usuario, error } = await this.$store.dispatch(
              "crearNotificaciones",
              notificacion
            );
          }
          if (this.usuario != cheque.autor){
            const usuario_autor = this.$store.getters.getNombreUsuario
            const mensaje_notificacion = usuario_autor + ' elimino el cheque: ' + cheque.nombre + '.'
            const notificacion = {
              'mensaje': mensaje_notificacion,
              'tipo': 'Eliminado',
              'uid': cheque.autor,
              'cheque': cheque.id,
              'fecha': fecha
            }
            const { mensaje, usuario, error } = await this.$store.dispatch(
              "crearNotificaciones",
              notificacion
            );
          }
        }
        this.$router.push("/");
      }
    },
    setImagen(val) {
      if (Boolean(val)) {
        this.img = val;
        this.overlay = !this.overlay;
        this.width = 200;
      }
    },
    async getPersonalAcargo(uid){
      await this.$store.dispatch('obtenerPersonalAcargo', {uid})
    },
    async getPersonalCreado(uid){
      await this.$store.dispatch('obtenerPersonalCreado', {uid})
    }
  },
};
</script>