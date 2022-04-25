<template>
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
            <v-btn class="error ma-2" :to="'/'" type="submit">Cancelar</v-btn>
            <v-btn class="primary" :disabled="!formIsValid" type="submit">
              Guardar cheque
            </v-btn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import SeleccionarEstadosMunicipio from "@/components/Estados.vue";
import SeleccionarUsuario from "../components/Usuarios.vue";
import SucursalesCode from "../components/Sucursales.vue";
export default {
  data() {
    return {
      id: '',
      nombre: "",
      cliente: null,
      clientes: ["BBVA", ],
      imagen: null,
      descripcion: null,
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
      imagenURL: "",
      estado: "",
      municipio: "",
      usuarioCargo: null,
      sucursal: null,
    };
  },
  components: {
    SeleccionarEstadosMunicipio,
    SeleccionarUsuario,
    SucursalesCode,
  },
  computed: {
    formIsValid() {
      const {
        nombre,
        cliente,
        imagen,
        estado,
        municipio,
        usuario,
        descripcion,
      } = this;
      return Boolean(
        nombre &&
          cliente &&
          imagen &&
          estado &&
          municipio &&
          usuario &&
          descripcion
      );
    },
    reglaImagen() {
      if (this.imagen != null) {
        return "Seleccione una imagen";
      } else null;
    },
    usuario() {
      return this.$store.getters.getUid;
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
      if (!this.imagen) {
        alert("Seleccione una imagen.");
        return;
      }
      const {
        nombre,
        cliente,
        imagen,
        descripcion,
        statu,
        estado,
        municipio,
        sucursal,
        usuarioCargo,
        usuario,
      } = this;
      const fecha = new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
      );
      const fechaConTiempo = fecha.toISOString();
      const cheque = {
        nombre: nombre,
        cliente: cliente,
        estado: estado,
        municipio: municipio,
        imagen: imagen,
        descripcion: descripcion,
        fecha: fechaConTiempo,
        statu: statu,
        usuarioCargo: usuarioCargo,
        autor: usuario,
        sucursal: sucursal,
      };
      const { message, uid, error } = await this.$store.dispatch(
        "registarCheque",
        cheque
      );
      if (uid) {
        alert(message);
        this.$router.push("/cheque/" + uid);
      } else {
        alert("No se pudo crear el cheque.");
      }
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