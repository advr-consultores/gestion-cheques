<template>
  <div>
    <v-container>
      <v-layout v-for="cheque in cheques" :key="cheque.id" class="mb-2">
        <v-flex>
          <v-card class="mx-auto" color='#1F7087' dark>
            <v-container fluid>
              <v-layout>
                <v-flex xs5 sm4 md3>
                  <v-img
                    :src="cheque.imagenURL"
                    height="150px"
                  ></v-img>
                </v-flex>
                <v-flex xs7 sm8 md9>
                  <v-card-title primary-title>
                    {{ cheque.nombre }}
                  </v-card-title>
                  <v-card-text>
                    <p class="text-h5 text--primary"> {{ cheque.cliente }}</p>
                    <p>{{ cheque.fecha }}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn :to="'/cheque/' + cheque.id">
                      Ver cheque
                      <v-icon left light>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
  export default {
    computed: {
      cheques () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>