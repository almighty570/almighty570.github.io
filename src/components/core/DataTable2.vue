<template>
  <div>
    <table :id="id">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{column}}</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "DataTable",
  props: {
    id: {
      type: String,
      required: true
    },

    columns: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    }
  },

  mounted() {
    $("#" + this.id).DataTable({
      data: this.rows,
      columns: this.columns
    });
  }
};
</script>

<style scoped lang="scss">
</style>
