<template>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn left dark v-bind="attrs" v-on="on"> <v-icon dark>mdi-account-plus</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Crear usuario</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="nombre"
                    label="Nombre*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="Correo*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Contraseña*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    name="confirmPassword"
                    label="Confirmar contraseña"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[comparePasswords]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="administrador"
                    :label="`Administrador: ${administrador ? 'Si': 'No'}`"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1"  @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn :disabled="nombre != null && password!=null && password == confirmPassword && email != null ? false: true" color="blue darken-1" @click="validate">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    email: null,
    password: null,
    confirmPassword: null,
    nombre: null,
    administrador: false,
  }),
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword ? "Las contraseñas no coinciden" : "";
    },
  },
  methods: {
    async validate() {
      if (this.comparePasswords != "Las contraseñas no coinciden"){
        const { email, password, nombre, administrador } = this;
        const usuario = { email: email, password: password, nombre: nombre, administrador: administrador };
        const { message, error } = await this.$store.dispatch("crearUsuarioEmailPassword", usuario);
        if (error) {
          alert(message);
          return;
        }
        alert(message);
        return;
      }
    },
  },
};
</script>