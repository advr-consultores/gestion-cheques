<template>
  <v-menu bottom left offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        bordered
        color="success"
        :content="notificaciones.length"
        overlap
      >
        <v-btn text v-bind="attrs" v-on="on" x-small><v-icon>mdi-bell</v-icon></v-btn>
      </v-badge>
    </template>
    <v-list two-line>
      <v-list-item-group multiple>
        <template v-for="(notificacion, index) in notificaciones">
          <v-list-item
            :key="notificacion.id"
            :to="'/cheque/' + notificacion.cheque"
            @click="verNotificacion(notificacion)"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="notificacion.tipo"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary" v-text="notificacion.mensaje"></v-list-item-subtitle>

                <v-list-item-subtitle v-text="notificacion.mensaje"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="get(notificacion.fecha)"
                ></v-list-item-action-text>

                <v-icon
                  v-if="notificacion.tipo == 'Comentario'"
                  color="success lighten-1"
                >
                  mdi-comment
                </v-icon>

                <v-icon
                  v-else-if="notificacion.tipo == 'Asignación'"
                  color="primary darken-3"
                >
                  mdi-credit-card-plus
                </v-icon>
                <v-icon
                  v-else-if="notificacion.tipo == 'Eliminado'"
                  color="error darken-3"
                >
                  mdi-bitbucket
                </v-icon>
                <v-icon v-else color="warning darken-1">mdi-update</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < notificaciones.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    fecha: null
  }),
  computed: {
    notificaciones() {
      return this.$store.getters.getNotificacones;
    },
  },
  methods: {
    get(fechaCheque) {
      const fecha = new Date(fechaCheque).getTime();
      let diferencia = Math.abs(new Date().getTime() - fecha) / 1000;

      const days = Math.floor(diferencia / 86400);
      diferencia -= days * 86400;

      const hours = (Math.floor(diferencia / 3600) % 24) - 5;
      diferencia -= hours * 3600;

      const minutes = Math.floor(diferencia / 60) % 60;

      let difference = "";
      if (days > 0) {
        difference += days === 1 ? `${days} dia, ` : `${days} dias, `;
      }

      difference +=
        hours === 0 || hours === 1 ? `${hours} hora, ` : `${hours} horas, `;

      difference +=
        minutes === 0 || hours === 1
          ? `${minutes} minuto`
          : `${minutes} minutos`;

      return difference;
    },
    async verNotificacion(notificacion){
      const index = this.notificaciones.indexOf(notificacion)
      const uid = this.$store.getters['getUid']
      const { error, message } = await this.$store.dispatch('eliminarNotificacion', { 'uid': uid, 'id': notificacion.id, 'indice': index })
      if (error){
        alert(message)
        return
      }
    }
  },
};
</script>