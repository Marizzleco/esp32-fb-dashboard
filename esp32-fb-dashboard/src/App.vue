<template>
  <div class="app">
      <HeaderComponent/>
      <div class="selectors">
        <DropdownSelector name="project"/>
        <DropdownSelector name="device"/>
      </div>
      <div class="dashboard">
        <DashboardComponent/>
      </div>
      <div class="footer">
        <p>StringerDev Copyright 2023</p>
      </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import DropdownSelector from './components/DropdownSelector.vue'

export default {
  name: 'App',

  components: {
    HeaderComponent,
    DashboardComponent,
    DropdownSelector,
  },

  data: () => ({
    //
  }),
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
  padding: 30px;
  border-radius: 5px;
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
