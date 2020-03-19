<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 200px;"
      class="ag-theme-balham"
      :columnDefs="columns"
      :rowData="rows"
      :rowSelection="hasMultipleRowSelection"
    ></ag-grid-vue>
  </div>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "DataTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    hasMultipleRowSelection: {
      type: Boolean
    }
  },
  data() {
    return {};
  },

  components: {
    AgGridVue
  },

  beforeMount() {},

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
</style>
