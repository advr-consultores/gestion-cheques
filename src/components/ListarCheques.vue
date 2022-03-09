<template>
  <v-card max-width="800" class="mx-auto">
    <v-card-actions>
      <v-autocomplete
        v-model="statu"
        :items="status"
        item-text="statu"
        value="value"
        dense
        filled
        label="Status"
      />
      <v-spacer />
      <v-btn x-large color="success" :to="'/cheque/nuevo'">
        Registrar cheque
      </v-btn>
    </v-card-actions>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="cheque in cheques" :key="cheque.id" cols="12">
          <v-card
            v-if="statu ? cheque.statu : !cheque.statu"
            class="mx-auto"
            color="#1F7087"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title primary-title>
                  {{ cheque.nombre }}
                </v-card-title>
                <v-card-text>
                  <p class="text-h5 text--primary">{{ cheque.cliente }}</p>
                  <p>{{ cheque.fecha }}</p>
                  <p>Estado: {{ cheque.estado }}</p>
                  <p>Municipio: {{ cheque.municipio }}</p>
                  <p v-if="cheque.statu">
                    Status: Concluido({{ cheque.statu }})
                  </p>
                  <p v-else>Status: No concluido</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn :to="'/cheque/' + cheque.id">
                    Ver cheque
                    <v-icon left light>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="200" tile>
                <v-img
                  :src="cheque.imagenURL"
                  @click="(overlay = !overlay), (img = cheque.imagenURL), (width = 200)"
                />
              </v-avatar>
              <div class="d-flex flex-column justify-space-between ">
                <v-overlay :z-index="zIndex" :value="overlay">
                  <v-slider
                    v-model="width"
                    class="align-self-stretch"
                    min="200"
                    max="500"
                    step="1"
                  />
                  <v-img :src="img" :width="width" @click="overlay = false" />
                </v-overlay>
              </div>
            </div>
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
  }),
  created() {
    this.listarCheques();
  },
  computed: {
    cheques() {
      return this.$store.getters.getCheques;
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
  },
};
</script>