<template>
  <main class="container">
    <div v-for="(category, categoryName) in categories" :key="categoryName">
      <h2>{{ categoryName }} </h2>
      <span class="cards" v-for="(vars, index) in category" :key="index">
        <div v-for="(variable) in vars" :key="variable">
          <CardComponent :cardData="variable"  />
        </div>
      </span>
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

<style>
.container {
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  border: 1px solid steelblue;
  border-radius: 5px;
}

.cards {
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
}

@media (max-width: 800px) {
  .cards {
    flex-direction: column;
  }
}
</style>
