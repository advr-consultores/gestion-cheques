<template>
  <v-container>
    <v-card color="#1F7087" dark class="mx-auto">
      <v-card-title>
        {{ cheque.nombre }}
        <v-spacer />
        <FormularioAgregarRecibo :id="id"/>
      </v-card-title>
      <v-img :src="cheque.imagenURL" height="400px"></v-img>
      <v-card-text>
        {{ cheque.cliente }} - {{ cheque.fecha }}
        <p class="text-h5 text--primary">{{ cheque.descripcion }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="error" @click="eliminarCheque()"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card color="#1F7087" class="mx-auto">
      <v-card-title>Recibo </v-card-title>
      <v-item-group multiple>
        <v-row>
          <v-col>
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="cheque.recibo"
                height="300"
                class="text-right pa-2"
                @click="toggle"
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
  </v-container>
</template>

<script>
import FormularioAgregarRecibo from "@/components/AgregarRecibo.vue";

export default {
  components: {
    FormularioAgregarRecibo,
  },
  props: {
    id: { type: String, default: "" },
  },
  data: () => ({
    items: [
      {
        src: "backgrounds/bg.jpg",
      },
    ],
  }),
  computed: {
    cheque() {
      return this.$store.getters.loadedMeetup(this.id);
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
      alert(message);
    },
    async eliminarCheque() {
      const { id, cheque } = this;
      const extensionFile = cheque.imagenURL.match(/.*\/([^/]+)\.([^?]+)/i)[2];
      const { message, error } = await this.$store.dispatch("eliminarCheque", {
        uid: id,
        extension: extensionFile,
      });
      if (error) {
        alert(message);
        return;
      }
      alert(message);
    },
  },
};
</script>