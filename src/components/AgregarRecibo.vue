<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="warning" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-format-list-checks</v-icon>Agregar recibo
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar recibo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-autocomplete
                  v-model="statu"
                  :items="estatus"
                  clearable
                  label="Estado del cheque"
                />
              </v-col>
              <v-col cols="12" sm="12">
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
              </v-col>
              <v-col cols="12" sm="12">
                <v-img :src="imagenURL" max-height="300" max-width="600" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
          <v-btn color="blue darken-1" text @click="recibo()">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' }  
  },
  data: () => ({
    dialog: false,
    estatus: [
      "Entregado a beto",
      "Paqueteria",
      "Entregado a responsable",
      "Depositado",
      "Subido",
      "Cheque devuelto",
      "Cheque dañado",
      "Cheque depositado",
      "Cheque enviado con guía",
      "Cheque roto",
      "Cheque cancelado",
      "Cheque tiene factura"
    ],
    statu: null,
    imagen: null,
    imagenURL: "",
  }),
  methods: {
    imagenSeleccionada() {
      this.$refs.archivoEntrada.click();
    },
    imagenElegida(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        alert("Agregue un archivo valido.");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imagenURL = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.imagen = files[0];
    },
    recibo() {
      const { id, imagen, statu } = this
      this.$store.dispatch('subirRecibo', { 'uid': id, 'imagen': imagen, 'statu': statu })
      this.dialog = false
    }
  },
};
</script>