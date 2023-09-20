<template>
    <div class="select-menu">
        <select v-model="filter.select" @change="handleFilterChange">
          <option value="0"> Select {{ name }}: </option>
          <option v-for="(category, categoryName) in categories" :key="categoryName">{{ categoryName }}</option>
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
        categories: {},
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
          this.categories = snapshot.val() || {};
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
}
select {
  height: 50px;
  width: 200px;
  padding: 16px 20px;
}
</style>
