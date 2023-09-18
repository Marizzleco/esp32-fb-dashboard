<template>
  <div class="card">
    <h2>{{ cardData.name }}</h2>
    <h3> {{ cardData.type }}</h3>
    <h3> {{ new Date(cardData.updated) }}</h3>
    <h3> {{ cardData.value }}</h3>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardData: Object,
  },
  data() {},
};
</script>

<style scoped>
.card {
  height: 250px;
  width: 250px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  padding: 20px;
  display: block;
}
</style>
