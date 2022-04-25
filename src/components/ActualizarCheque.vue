<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="350"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        > <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-container>
          <v-card-text>
            <h1>Registrar cheque</h1>
          </v-card-text>
          <v-card-text>
            <form @submit.prevent="crearCheque()">
              <v-text-field label="Nombre del cheque" v-model="nombre" required />

              <v-autocomplete
                v-model="cliente"
                :items="clientes"
                clearable
                label="Cliente"
              />
              <SeleccionarEstadosMunicipio
                :id="id"
                @eventEstadoMunicipio="setstadoMunicipio"
              />
              <SucursalesCode
                :estado="estado"
                :municipio="municipio.toUpperCase()"
                :id="id"
                @eventSucursal="setSucursal"
              />
              <SeleccionarUsuario :id="id" @eventUsuario="setUsuarioCargo" />
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
                accept="image/png, image/jpeg, image/bmp"
                @change="imagenElegida"
              />
              <v-img :src="imagenURL" />

              <v-text-field label="Descripción" v-model="descripcion" required />

              <v-card-actions>
                <v-spacer />
                <v-btn class="error ma-2" type="submit" @click="dialog = false">Cancelar</v-btn>
                <v-btn class="primary" :disabled="!formIsValid" type="submit" @click="dialog=false, crearCheque()">
                  Guardar cheque
                </v-btn>
              </v-card-actions>
            </form>
          </v-card-text>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
import SeleccionarEstadosMunicipio from "@/components/Estados.vue";
import SeleccionarUsuario from "../components/Usuarios.vue";
import SucursalesCode from "../components/Sucursales.vue";
export default {
  props: ['id', 'cliente', 'nombre', 'descripcion', 'imagenURL'],
  data() {
    return {
      clientes: ["BBVA", "Scotiabank", "Movistar", "Banamex"],
      imagen: null,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      estatus: [
        "Entregado a beto",
        "Paqueteria",
        "Entregado a responsable",
        "Depositado",
        "Subido",
      ],
      statu: null,
      estado: "",
      municipio: "",
      usuarioCargo: null,
      sucursal: null,
      dialog: false,
    };
  },
  components: {
    SeleccionarEstadosMunicipio,
    SeleccionarUsuario,
    SucursalesCode,
  },
  computed: {
    formIsValid() {
      const { nombre, cliente, estado, municipio, usuario, descripcion } = this;
      return Boolean(nombre && cliente && estado && municipio && usuario && descripcion);
    },
    reglaImagen() {
      if (this.imagen != null) {
        return "Seleccione una imagen";
      } else null;
    },
    usuario() {
      return this.$store.getters.getUid;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    isAcargo() {
      if (this.$store.getters.getUid == this.usuarioCargo) {
        return true;
      }
      return false;
    },
  },
  watch: {
    imagen(val) {
      if (!Boolean(val)) {
        this.imagenURL = null;
      }
    },
  },
  methods: {
    async crearCheque() {
      if (!this.formIsValid) {
        return;
      }
      const { nombre, cliente, imagen, descripcion, statu, estado, municipio, sucursal, usuarioCargo, imagenURL, id } = this;
      const cheque = {
        uid: id,
        nombre: nombre,
        cliente: cliente,
        estado: estado,
        municipio: municipio,
        imagen: imagen,
        imagenURL: imagenURL,
        descripcion: descripcion,
        statu: statu,
        usuarioCargo: usuarioCargo,
        sucursal: sucursal,
      };
      const { message, uid, error } = await this.$store.dispatch(
        "actualizarCheque",
        cheque
      );
      if (error) {
        alert("No se pudo crear el cheque.");
      } else {
        alert(message);
      }
      return
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
        this.imagenURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imagen = files[0];
    },
    setstadoMunicipio({ estado, municipio }) {
      this.estado = estado;
      this.municipio = municipio;
    },
    setUsuarioCargo({ usuario }) {
      this.usuarioCargo = usuario;
    },
    setSucursal({ sucursal }) {
      this.sucursal = sucursal;
    },
  },
};
</script>