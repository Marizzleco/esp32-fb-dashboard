<template>
  <v-app>
    <v-main>
      <HeaderComponent/>
      <DropdownSelector/>
      <DashboardComponent/>
    </v-main>
  </v-app>
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
