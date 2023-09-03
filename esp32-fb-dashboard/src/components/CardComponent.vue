<template>
    <div class="card">   
        <h3> {{ title }} </h3>
        <p> {{ details }} </p>
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
height: 200px;
width: 200px;
background-color: grey;
border-radius: 25px;
}
</style>
