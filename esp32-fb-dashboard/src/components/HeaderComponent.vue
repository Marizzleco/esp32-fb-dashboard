<template>
  <header>
    <img :src="require('@/assets/logo.png')">
    <h1>Ensee Project Dashboard</h1>
    <ButtonComponent class="login" />
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
* {
  background-color: #fff;
}
header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}
img {
  height: 50px;
  width: 50px;
}
h1 {
  padding: 10px;
}
.login {
  display: block;
  margin-left: auto;
}
</style>
