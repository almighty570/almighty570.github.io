<template>
  <div>
    <ag-grid-vue
      style="width: 500px; height: 300px;"
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
    columns: Array,
    rows: Array,
    hasMultipleRowSelection: Boolean
  },
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },

  components: {
    AgGridVue
  },

  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Make",
        field: "make",
        sortable: true,
        filter: true,
        checkboxSelection: true
      },
      { headerName: "Model", field: "model", sortable: true, filter: true },
      { headerName: "Price", field: "price", sortable: true, filter: true }
    ];

    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => (this.rowData = rowData));
  },

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../../../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
</style>
