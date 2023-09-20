<template>
  <div class="app">
      <HeaderComponent class="header"/>
      <DropdownDashboard @filter-change="handleFilterChange"/>
      <div class="dashboard">
        <DashboardComponent :selectedFilter="selectedFilter"/>
      </div>
      <div class="footer">
        <p>Stringify Copyright 2023</p>
      </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import DropdownDashboard from './components/DropdownDashboard.vue'

export default {
  name: 'App',

  components: {
    HeaderComponent,
    DashboardComponent,
    DropdownDashboard
  },

  data(){ 
    return {
      selectedFilter: '',
    };
  },
  methods: {
    handleFilterChange(newFilter) {
      console.log('Received new filter:', newFilter);
      this.selectedFilter = String(newFilter);
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Tahoma, sans-serif;
}

.app {
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #000;
  /* padding: 30px; */
  border-radius: 5px;
}
.header, .dashboard, .footer {
  margin: 30px;
}
.selectors {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000;
}
.footer {
  font-size: 10px;
  margin: auto;
}

</style>
