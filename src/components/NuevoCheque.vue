<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Registrar cheque</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <form @submit.prevent="crearCheque()">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                label="Nombre del cheque"
                v-model="nombre"
                required
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field label="Cliente" v-model="cliente" required />
            </v-flex>
          </v-layout>
          <!-- <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-autocomplete
                v-model="statu"
                :items="estatus"
                clearable
                label="Estado del cheque"
              />
            </v-flex>
          </v-layout> -->
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field label="Estado" v-model="estado" required />
          </v-flex>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field label="Municipio" v-model="municipio" required />
          </v-flex>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-file-input
                v-model="imagen"
                prepend-icon="mdi-camera"
                label="Imagen de cheque"
                @click="imagenSeleccionada"
              />
              <input
                type="file"
                style="display: none"
                ref="archivoEntrada"
                accept="image/png, image/jpeg, image/bmp"
                @change="imagenElegida"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="imagenURL" max-height="300" max-width="600" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                label="Descripción"
                v-model="descripcion"
                required
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="error ma-2" :to="'/'" type="submit">Cancelar</v-btn>
              <v-btn class="primary" :disabled="!formIsValid" type="submit"
                >Guardar cheque</v-btn
              >
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      cliente: '',
      imagen: null,
      descripcion: '',
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          'Avatar size should be less than 2 MB!',
      ],
      estatus: [
        'Entregado a beto',
        'Paqueteria',
        'Entregado a responsable',
        'Depositado',
        'Subido',
      ],
      statu: null,
      imagenURL: '',
      estado: '',
      municipio: ''
    };
  },
  computed: {
    formIsValid() {
      return this.nombre !== '' && this.cliente !== '' && this.imagen !== '';
    },
  },
  methods: {
    async crearCheque() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.imagen) {
        return;
      }
      const { nombre, cliente, imagen, descripcion, statu } = this;
      const fecha = new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
      );
      const fechaConTiempo = fecha.toISOString();
      const cheque = {
        nombre: nombre,
        cliente: cliente,
        imagen: imagen,
        descripcion: descripcion,
        fecha: fechaConTiempo,
        statu: statu,
      };
      const { message, uid, error } = await this.$store.dispatch(
        'registarCheque',
        cheque
      );
      if (error) {
        alert(message);
        return;
      }
      alert(message);
      this.$router.push('/cheque/' + uid);
    },
    imagenSeleccionada() {
      this.$refs.archivoEntrada.click();
    },
    imagenElegida(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        alert('Agregue una imagen valida.');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imagenURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imagen = files[0];
    },
  },
};
</script>