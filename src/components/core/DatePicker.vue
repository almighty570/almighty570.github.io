<template>
  <div class="mb-2">
    <label v-if="label">{{label}}</label>
    <vue-datepicker input-class="form-control" @selected="handleSelected"></vue-datepicker>
  </div>
</template>

<script>
import VueDatepicker from "vuejs-datepicker";
export default {
  name: "Datepicker",
  components: {
    VueDatepicker
  },
  props: {
    label: {
      type: String
    }
  },

  methods: {
    handleSelected(date) {
      this.$emit("input", date);
    }
  }
};
</script>

<style lang="scss" scoped>
.spin {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
