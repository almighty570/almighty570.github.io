<template>
  <div :class="{'table-responsive': responsive}">
    <table :id="id" class="_datatable table" :class="custom_class"></table>
  </div>
</template>

<script>
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
    },

    custom_class: {
      type: String
    },

    responsive: {
      type: Boolean
    }
  },

  mounted() {
    $("#" + this.id).DataTable({
      data: this.rows,
      responsive: this.responsive,
      columns: this.columns
    });
  }
};
</script>

<style scoped lang="scss">
</style>
