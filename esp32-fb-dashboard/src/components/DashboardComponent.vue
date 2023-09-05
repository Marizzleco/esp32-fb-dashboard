<template>
  <main class="container">
    <div v-for="(category, categoryName) in categories" :key="categoryName">
      <h2>{{ categoryName }}</h2>
      <div v-for="(variable, variableName) in category" :key="variableName">
        <CardComponent :cardData="variable" :name="variableName" />
      </div>
    </div>
  </main>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { ref, onValue } from "firebase/database";
import db from "../firebase/init.js";

export default {
  name: "DashboardComponent",
  data() {
    return {
      categories: {},
    };
  },
  created() {
    this.getVariables();
  },
  methods: {
    getVariables() {
      const variablesRef = ref(db);

      onValue(variablesRef, (snapshot) => {
        this.categories = snapshot.val() || {};
      });
    },
  },
  components: {
    CardComponent,
  },
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
