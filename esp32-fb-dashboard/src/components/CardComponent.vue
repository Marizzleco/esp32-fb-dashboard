<template>
    <div class="card">   
        <h2> {{ title }} </h2>
        <h3> {{ details }} </h3>
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
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
padding: 20px;
display: block;
}
</style>
