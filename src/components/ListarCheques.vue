<template>
  <v-card max-width="800" class="mx-auto">
    <v-card-actions>
    <v-card-title>{{cheques.length}} Cheques  </v-card-title>
      <v-spacer />
      <v-btn color="success" :to="'/cheque/nuevo'">
        <v-icon left>mdi-credit-card-plus</v-icon> cheque
      </v-btn>
    </v-card-actions>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="statu"
            :items="status"
            item-text="statu"
            value="value"
            dense
            filled
            label="Status"
          />
        </v-col>
        <v-col v-for="cheque in cheques" :key="cheque.id" cols="12">
          <v-card
            v-if="statu ? cheque.statu : !cheque.statu"
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
              Fehca: {{ new Date(cheque.fecha).toLocaleDateString("es-ES") }} <br>
              Estado: {{ cheque.estado }} <br>
              Municipio: {{ cheque.municipio }} <br>
                <!-- <p>Creado por: {{ getPersonalCreado(cheque.autor) }}</p>-->
                <!-- <p>Responsable: {{ getPersonalAcargo(cheque.usuarioCargo) }}</p>  -->
              Sucursal: {{ cheque.sucursal }} <br>
              <p v-if="cheque.statu">Status: Concluido({{ cheque.statu }})</p>
              <p v-else>Status: No concluido</p>
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
            <v-card-text>
              No hay cheques, de click en registrar cheque.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    status: [
      { statu: "Concluidos", value: true },
      { statu: "No concluidos", value: false },
    ],
    statu: false,
    overlay: false,
    zIndex: 0,
    img: null,
    width: 300,
    cheque: null,
  }),
  created() {
    this.listarCheques();
  },
  computed: {
    cheques() {
      return this.$store.getters.getCheques;
    },
    isClientes() {
      return !Boolean(this.$store.getters.getCheques.length);
    },
  },
  methods: {
    async listarCheques() {
      const { message, error } = await this.$store.dispatch("listarCheques");
      if (error) {
        alert(message);
        return;
      }
      // alert(message);
    },
    getPersonalAcargo(uid) {
      this.$store.dispatch("obtenerPersonalAcargo", { uid });
      return this.$store.getters.getPersonalAcargo;
    },
    getPersonalCreado(uid) {
      this.$store.dispatch("obtenerPersonalCreado", { uid });
      return this.$store.getters.getPersonalCreado;
    },
  },
};
</script>