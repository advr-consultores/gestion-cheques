<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Crear nuevo cheque</h1>
      </v-flex>
    </v-layout>
    <v-layout >
      <v-flex xs12>
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
              <v-text-field
                label="Cliente"
                v-model="cliente"
                required 
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <!-- <v-btn class="primary" @click="archivoSeleccionado()">Elige una imagen</v-btn> -->
              <v-file-input
                v-model="imagen"
                placeholder="Elige una imagen"
                prepend-icon="mdi-camera"
                label="Imagen"
                
                @click="archivoSeleccionado"
              />
              <input
                type="file"
                style="display: none"
                ref="archivoEntrada"
                accept="image/png, image/jpeg, image/bmp"
                @change="archivoElegido"
              >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-img :src="imagenURL" height="150" />
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
              <v-btn
                class="error ma-2" 
                :to="'/'"
                type="submit">Cancelar</v-btn>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Guardar cheque</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        nombre: '',
        cliente: '',
        imagen: null,
        descripcion: '',
        rules: [
          value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        imagenURL: '',
      }
    },
    computed: {
      formIsValid () {
        return this.nombre !== '' &&
          this.cliente !== '' &&
          this.imagen !== '' &&
          this.descripcion !== ''
      },
    },
    methods: {
      crearCheque() {
        if (!this.formIsValid) {
          return
        }
        if (!this.imagen){
          return
        }
        const meetupData = {
          nombre: this.nombre,
          cliente: this.cliente,
          imagen: this.imagen,
          descripcion: this.descripcion,
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/cheques')
      },
      archivoSeleccionado() {
        this.$refs.archivoEntrada.click()
      },
      archivoElegido(event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0){
          alert('Agregue un archivo valido.')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imagenURL = fileReader.result
        }) 
        fileReader.readAsDataURL(files[0])
        this.imagen = files[0]
      }
    }
  }
</script>