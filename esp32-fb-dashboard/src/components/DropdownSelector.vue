<template>
    <div class="select-menu">
        <select>
            <option value="0"> Select {{ name }}: </option>
            <option value="1"> Value 1 </option>
            <option value="2"> Value 2 </option>
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
