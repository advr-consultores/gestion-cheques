<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
        :disabled="deshabilitar"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto">
      <v-card-title>
        Actualizar cheque <v-spacer></v-spacer>
        <v-btn icon color="error" @click="dialog = !dialog"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <form>
          <v-text-field label="Nombre del cheque" v-model="name" required />

          <v-autocomplete
            v-model="client"
            :items="clientes"
            clearable
            label="Cliente"
          />
          <seleccionar-estados-municipio
            :id="id"
            @eventEstadoMunicipio="setEstadoMunicipio"
          />
          <sucursales-code
            :estado="estado"
            :municipio="municipio.toUpperCase()"
            :cliente="cheque.cliente"
            :id="id"
            @eventSucursal="setSucursal"
          />
          <seleccionar-usuario :id="id" @eventUsuario="setUsuarioCargo" />
          <v-file-input
            v-model="imagen"
            prepend-icon="mdi-camera"
            label="Imagen de cheque"
            @click="imagenSeleccionada"
          />
          <input
            required
            type="file"
            style="display: none"
            ref="archivoEntrada"
            accept="image/*"
            @change="imagenElegida"
          />
          <v-img :src="img" />

          <v-text-field label="Descripción" v-model="descripcion" required />

          <v-card-actions>
            <v-spacer />
            <v-btn class="error ma-2" @click="dialog = false">Cancelar</v-btn>
            <v-btn
              class="primary"
              :disabled="!formIsValid"
              @click="actualizarCheque()"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import SeleccionarEstadosMunicipio from "@/components/Estados.vue";
import SeleccionarUsuario from "../components/Usuarios.vue";
import SucursalesCode from "../components/Sucursales.vue";
export default {
  props: [
    "id",
    "cliente",
    "nombre",
    "descripcion",
    "imagenURL",
    "autor",
    "deshabilitar",
  ],
  data() {
    return {
      clientes: ["BBVA", "Scotiabank", "Movistar", "CITI"],
      imagen: null,
      statu: null,
      estado: "",
      municipio: "",
      usuarioCargo: null,
      sucursal: null,
      dialog: false,
      cheque: {
        uid: null,
        nombre: null,
        cliente: null,
        estado: null,
        municipio: null,
        sucursal: null,
        usuarioCargo: null,
        imagenURL: null,
        descripcion: null,
        imagen: null,
      },
    };
  },
  components: {
    "seleccionar-estados-municipio": SeleccionarEstadosMunicipio,
    "seleccionar-usuario": SeleccionarUsuario,
    "sucursales-code": SucursalesCode,
  },
  computed: {
    formIsValid() {
      const { name, cliente, estado, municipio, usuario, descripcion } = this;
      return Boolean(
        name && cliente && estado && municipio && usuario && descripcion
      );
    },
    usuario() { return this.$store.getters.getUid },
    isAdmin() { return this.$store.getters.isAdmin },
    isAcargo() {
      if (this.$store.getters.getUid == this.usuarioCargo) {
        return true;
      }
      return false;
    },
    name: {
      set(newValue) {
        this.cheque.nombre = newValue;
      },
      get() {
        this.cheque.nombre = this.nombre;
        return this.nombre;
      },
    },
    client: {
      set(newValue) {
        this.cheque.cliente = newValue;
      },
      get() {
        this.cheque.cliente = this.cliente;
        return this.cliente;
      },
    },
    img: {
      set(newValue) {
        this.cheque.imagenURL = newValue;
        this.cheque.imagen = this.imagen;
      },
      get() {
        if (this.cheque.imagen) {
          return this.cheque.imagen;
        }
        return this.imagenURL;
      },
    },
  },
  watch: {
    imagen(val) {
      if (!Boolean(val)) {
        this.img = null;
      }
    },
  },
  methods: {
    async actualizarCheque() {
      if (!this.formIsValid) {
        return;
      }
      const { id, cheque, autor, usuario } = this;
      // cheque.imagenURL = this.imagenURL
      cheque.descripcion = this.descripcion;
      cheque.uid = id;
      const { message, error } = await this.$store.dispatch("actualizarCheque", cheque);
      if (error) {
        alert("No se pudo actualizar el cheque.")
      } else {
        alert(message);
        const fecha = new Date(
          new Date().getTime() - new Date().getTimezoneOffset() * 60000
        ).toISOString();
        const usuario_autor = this.$store.getters.getNombreUsuario
        const mensaje_notificacion = usuario_autor + ' ha actualizo el cheque: ' + cheque.nombre + '.'
        if (usuario != cheque.usuarioCargo){
          var notificacion = {
            'mensaje': mensaje_notificacion,
            'tipo': 'Actualizacion',
            'uid': cheque.usuarioCargo,
            'cheque': cheque.uid,
            'fecha': fecha
          }
        }
        if (this.usuario != autor){
          var notificacion = {
            'mensaje': mensaje_notificacion,
            'tipo': 'Actualizacion',
            'uid': autor,
            'cheque': cheque.uid,
            'fecha': fecha
          }
        }
        const { mensaje, usuario, error } = await this.$store.dispatch("crearNotificaciones", notificacion)
      }
      this.dialog = false;
      return;
    },
    imagenSeleccionada() {
      this.$refs.archivoEntrada.click();
    },
    imagenElegida(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        alert("Agregue una imagen valida.");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.img = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imagen = files[0];
    },
    setEstadoMunicipio({ estado, municipio }) {
      this.estado = estado;
      this.municipio = municipio;
      this.cheque.estado = estado;
      this.cheque.municipio = municipio;
    },
    setUsuarioCargo({ usuario }) {
      this.usuarioCargo = usuario;
      this.cheque.usuarioCargo = usuario;
    },
    setSucursal({ sucursal }) {
      this.sucursal = sucursal;
      this.cheque.sucursal = sucursal;
    },
  },
};
</script>