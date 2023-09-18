<template>
    <div class="select-menu">
        <select>
          <option value="0"> Select {{ name }}: </option>
          <option > {{ values }}</option>
        </select>
    </div>
</template>

<script>


export default {

  name: "DropdownSelector",
  data() {
  },
  props: {
    name: String,
    values: Object
  }
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
