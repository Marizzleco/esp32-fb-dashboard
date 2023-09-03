<template>
    <main class="container">
        <CardComponent title="Variable 1" details="Var Type 1"/>
        <CardComponent title="Variable 2" details="Var Type 2"/>
        <CardComponent title="Variable 3" details="Var Type 3"/>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  name: "DashboardComponent",
  data() {
    
  },
  components: {
    CardComponent,
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
