<template>
  <v-card class="mx-auto">
        <v-card-title v-if="acargo">Encargad@ {{creado}}
          <v-spacer></v-spacer>
          <v-btn color="success" :to="'/cheque/nuevo'">
            cheque <v-icon right>mdi-credit-card-plus</v-icon>
          </v-btn></v-card-title>
        <v-card-subtitle> Control <b v-if="acargo != 'Anonimo'">{{acargo}}</b></v-card-subtitle>
      
    <v-divider />
    <v-card-actions>
      <v-chip
        class="ma-2"
        color="primary"
        :outlined="status"
        @click="status = !status, listarCheques()"
      >
        No concluidos
      </v-chip>
      <v-chip
        class="ma-2"
        color="primary"
        :outlined="!status"
        @click="status = !status, listarCheques()"
      >
        Concluidos
      </v-chip>

    </v-card-actions>
    <v-toolbar
      flat
      color="transparent"
    >

      <v-text-field
        v-model="buscar"
        append-icon="mdi-magnify"
        label="Buscar cheque (mcpio, d/f, desc.)"
        single-line
        clearable
      ></v-text-field>
    </v-toolbar>
    <v-responsive
      class="overflow-y-auto"
      max-height="400"
    >
      <v-card-title>
        {{chequesBuscado.length}} cheques
        <v-spacer />
        <!-- <v-btn text color="primary">Administrar</v-btn> -->
        <Administrar @eventAutorSeleccionado="setAutorCeheque" />
      </v-card-title>
      <v-container fluid>
        <v-row>
          <v-col v-for="cheque in chequesBuscado" :key="cheque.id" cols="auto">
            <v-card
              class="mx-auto"
              color="#1F7087"
              dark
            >
              <v-img
                :src="cheque.imagenURL"
                @click="
                  (overlay = !overlay), (img = cheque.imagenURL), (width = 200)
                "
              />
              <v-card-title primary-title>
                {{ cheque.nombre }}
              </v-card-title>
              <v-card-text>
                Cliente: {{ cheque.cliente }} <br>
                <!-- Fehca: {{ new Date(cheque.fecha).toLocaleDateString("es-ES") }} <br> -->
                Fehca: {{cheque.fecha}} <br>
                Estado: {{ cheque.estado }} <br>
                Municipio: {{ cheque.municipio }} <br>
                Sucursal: {{ cheque.sucursal }} <br>
                <p v-if="cheque.statu">Status: Concluido({{ cheque.statu }})</p>
                <p v-else>Status: No concluido</p>
                {{ cheque.descripcion }}
              </v-card-text>
              <v-card-actions>
                <v-btn :to="'/cheque/' + cheque.id">
                  Ver cheque
                  <v-icon left light>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>

              <v-overlay :z-index="zIndex" :value="overlay">
                <v-slider
                  v-model="width"
                  class="align-self-stretch"
                  min="200"
                  max="500"
                  step="1"
                />
                <div class="d-flex flex-column justify-space-between">
                  <v-img :src="img" :width="width" @click="overlay = false" />
                </div>
              </v-overlay>
            </v-card>
          </v-col>
          <v-col v-if="isClientes" cols="12">
            <v-card class="mx-auto" color="#1F7087" dark>
              <v-card-title>
                No hay cheques.
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-card>
</template>

<script>
import Administrar from '@/components/Administrar.vue'
export default {
  data: () => ({
    status: false,
    statu: false,
    overlay: false,
    zIndex: 0,
    img: null,
    width: 300,
    cheque: null,
    buscar: '',
    autor: null,
    responsable: null
  }),
  components: {
    Administrar
  },
  computed: {
    cheques() {
      const cheques = this.$store.getters.getCheques;
      if(this.responsable == null){
        return cheques
      }
      for (let key in cheques) {
        if( this.responsable != cheques[key].usuarioCargo){
          cheques.splice(key, 1)
        }
      }
      return cheques
    },
    isClientes() {
      return !Boolean(this.$store.getters.getCheques.length);
    },
    chequesBuscado(){
      if (!this.buscar) return this.cheques
      const search = this.buscar.toLowerCase()
      return this.cheques.filter(item => {
        var text = item.municipio.toLowerCase()
        var index = text.indexOf(search)
        if (index == -1){
          text = item.fecha.toLowerCase()
          index = text.indexOf(search)
          if (index == -1){
            text = item.descripcion.toLowerCase()
            index = text.indexOf(search)
          }
        }
        return index > -1
      })
    },
    creado(){
      return this.$store.getters.getPersonalCreado
    },
    acargo(){
      return this.$store.getters.getPersonalAcargo
    }
  },
  methods: {
    async listarCheques() {
      const{ status, autor }  = this
      const { message, error } = await this.$store.dispatch("listarCheques",
        { status: status, autor: autor }
      );
      if (error) {
        alert(message);
        return;
      }
      // alert(message);
    },
    async setAutorCeheque({usuario, responsableUsuario}){
      this.autor = usuario
      this.responsable = responsableUsuario
      await this.$store.dispatch('obtenerPersonalCreado', { uid: usuario })
      await this.$store.dispatch('obtenerPersonalAcargo', { uid: responsableUsuario })
      this.listarCheques()
    }
  },
};
</script>