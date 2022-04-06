<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-autocomplete
        v-model="usuario"
        :items="usuarios"
        item-text="username"
        item-value="id"
        clearable
        no-data-text="No se encontró ningún usuario."
        label="Seleccionar usuario"
        item-disabled="administrador"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    usuario: null,
  }),
  computed: {
    usuarios() { return this.$store.getters.getUsuarios }
  },
  created(){
    this.listarUsuarios()
  },
  methods: {
    async listarUsuarios(){
      await this.$store.dispatch('obtenerUsuarios')
    }
  },
  watch: {
    usuario(val) {
      this.$emit('eventUsuario', { 'usuario': val })
    },
  }
};
</script>