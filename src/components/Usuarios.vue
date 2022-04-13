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
        label="Usuarios"
        item-disabled="administrador"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' }
  },
  data: () => ({
    usuarioSeleccionado: null,
  }),
  computed: {
    cheque() {
      if(this.id){
        return this.$store.getters.loadedMeetup(this.id);
      } return null
    },
    usuario: {
      set(newValue){
        this.usuarioSeleccionado = newValue
      },
      get(){
        if (this.cheque != null){
          this.usuarioSeleccionado = this.cheque.usuarioCargo
          return this.cheque.usuarioCargo
        } return null
      }
    },
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
    usuarioSeleccionado(val) {
      this.$emit('eventUsuario', { 'usuario': val })
    },
  }
};
</script>