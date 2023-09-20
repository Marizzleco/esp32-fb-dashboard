<template>
    <main class="container">
        <div>
            <DropdownSelector name="device" @filter-change="handleFilterChange"/>
        </div>
    </main>
  </template>
  
  <script>
  import DropdownSelector from "./DropdownSelector.vue";

  
  export default {
    name: "DropdownDashboard",
    data() {
  },
  methods: {
    handleFilterChange(newFilter) {
      this.$emit('filter-change', newFilter);
    },
  },
    components: {
      DropdownSelector,
    },
  };
  </script>
  
  <style>
  /* .container {
    max-width: 1000px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
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
  } */
  </style>
  