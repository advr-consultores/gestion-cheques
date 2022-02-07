<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card color='#1F7087' dark>
          <v-card-title>
            {{ meetup.nombre }}
          </v-card-title>
          <v-img
            :src="meetup.imagenURL"
            height="400px"
          ></v-img>
          <v-card-text>
            {{ meetup.cliente }} - {{ meetup.fecha }}
            <p class="text-h5 text--primary"> {{ meetup.descripcion }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="error" ><v-icon>mdi-delete</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>