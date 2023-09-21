<template>
  <main class="container">
    <span class="device" v-for="(device, deviceName) in devices" :key="deviceName" >
      <h2 class="title" v-if="shouldDisplay(deviceName)" >{{ deviceName }} </h2>
      <span class="cards" v-for="(vars, index) in device" :key="index">
  <div v-for="(variable) in vars" :key="variable.id">
    <CardComponent
      v-if="shouldDisplay(deviceName)"
      :cardData="variable"
      :key="variable.id"
    />
  </div>
</span>
</span>
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
      devices: {},

    };
  },
  props: {
    selectedFilter: String
  },
  created() {
    this.getVariables();
  },
  methods: {
    getVariables() {
      const variablesRef = ref(db);

      onValue(variablesRef, (snapshot) => {
        this.devices = snapshot.val() || {};
      });
    },

  shouldDisplay(deviceName) {
    if(this.selectedFilter === 0) {
      return true;
    } else {
    return !this.selectedFilter || deviceName === this.selectedFilter;
    }
  }
    
  },
  components: {
    CardComponent,
  },
};
</script>

<style scoped>
.container {
  overflow: auto;
  padding: 20px;
}

.category {
  padding: 20px;
}

.cards {
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
}

h2 {
  margin: 30px;
  display: inline-block;
}

@media (max-width: 800px) {
  .cards {
    flex-direction: column;
  }
}
</style>
