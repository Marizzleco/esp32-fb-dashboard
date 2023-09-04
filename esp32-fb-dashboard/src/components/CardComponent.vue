<template>
    <div class="card">   
        <v-card>
        <v-card-title> {{ title }} </v-card-title>
        <v-card-text> {{ details }} </v-card-text>
        </v-card>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "CardComponent",
  props: {
    title: String,
    details: String,
  },
  data() {
  }
}
</script>

<style scoped>
.card {
/* height: 200px;
width: 200px;
background-color: grey;
border-radius: 25px; */
}
</style>
