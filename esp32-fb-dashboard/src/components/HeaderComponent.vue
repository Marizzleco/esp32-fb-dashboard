<template>
  <header>
    <img src="../assets/logo.png" />
    <h1>Ensee Project Dashboard</h1>
    <ButtonComponent />
  </header>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'

export default {
  name: "HeaderComponent",
  data() {
    return {
      images: [
        {
          name: "logo",
          src: "/assets/logo.png",
        }
      ]
    }
  },
  components: {
    ButtonComponent
  }
};
</script>

<style scoped>
header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}
img {
  height: 150px;
  width: 150px;
}
</style>
