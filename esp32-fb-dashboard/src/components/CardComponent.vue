<template>
  <div class="card">
    <h2>{{ cardData.name }}</h2>
    <h3>{{ cardData.value }}</h3>
    <p>Last Updated: {{ new Date(cardData.updated).toLocaleString() }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardData: Object,
  },
};
</script>

<style scoped>
* {
  background-color: #fff;
}
.card {
  height: 250px;
  width: 250px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  padding: 20px;
  display: block;
}

h2, h3 {

  padding: 20px;
}
</style>
