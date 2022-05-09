<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on" text> Administrar </v-btn>
    </template>
    <v-card class="mx-auto">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Administrar cheques</v-toolbar-title>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>Usuarios</v-subheader>
      </v-list>
      <v-divider></v-divider>
        <v-autocomplete
        v-model="usuario"
        :items="usuarios"
        item-text="username"
        item-value="id"
        clearable
        no-data-text="No se encontró ningún usuario."
        label="Encargadas de las peticiones"
        item-disabled="administrador"
      />
      <v-autocomplete
        v-model="usuarioResponsable"
        :items="usuarios"
        item-text="username"
        item-value="id"
        clearable
        no-data-text="No se encontró ningún usuario."
        label="Control de cheques"
        item-disabled="administrador"
      />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      usuarioSeleccionado: null,
      usuarioResponsableSeleccionado: null
    };
  },
  computed: {
    uid(){
      return this.$store.getters.getUid
    },
    usuarios() {
      return this.$store.getters.getUsuarios
    },
    usuario:{
      get(){
        const uidU = this.uid
        if (this.usuarioSeleccionado != null){
          return this.usuarioSeleccionado
        }
        this.$emit('eventAutorSeleccionado', { 'usuario': uidU, 'responsableUsuario': this.usuarioResponsableSeleccionado })
        return uidU
      },
      set(newValue){
        this.usuarioSeleccionado = newValue
        this.$emit('eventAutorSeleccionado', { 'usuario': newValue, 'responsableUsuario': this.usuarioResponsableSeleccionado })
      }
    },
    usuarioResponsable:{
      get(){
        return this.usuarioResponsableSeleccionado
      },
      set(newValue){
        this.usuarioResponsableSeleccionado = newValue
        this.$emit('eventAutorSeleccionado', { 'usuario': this.usuario, 'responsableUsuario': newValue})
      }
    }
  },
  created(){
    this.listarUsuarios()
  },
  methods: {
    async listarUsuarios(){
      await this.$store.dispatch('obtenerUsuarios')
    },
  },
};
</script>