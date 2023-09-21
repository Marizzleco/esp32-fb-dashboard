<template>
    <div class="select-menu">
        <select v-model="filter.select" @change="handleFilterChange">
          <option value=""> Select {{ name }}: </option>
          <option v-for="(device, deviceName) in devices" :key="deviceName">{{ deviceName }}</option>
        </select>
    </div>
</template>

<script>
  import { ref, onValue } from "firebase/database";
  import db from "../firebase/init.js";

export default {
  name: "DropdownSelector",
  data() {
    return {
        devices: {},
        filter: {select: ''}
        };
        
      },
  props: {
    name: String,
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
      handleFilterChange() {
        this.$emit('filter-change', this.filter.select);
},
    },
}
</script>

<style scoped>
* {
  margin: 20px;
  
  padding: 10px;
}
select {
  height: 50px;
  width: 200px;
  padding: 16px 20px;
  background-color: #fff;
  border-radius: 25px;
}
</style>
