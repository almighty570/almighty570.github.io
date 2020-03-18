<template>
  <div class="mb-2">
    <label v-if="label">{{label}}</label>
    <vue-datepicker :input-class="input_class" @selected="handleSelected"></vue-datepicker>
    <template v-if="errors">
      <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
    </template>
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
    },

    errors: {
      type: Array
    }
  },

  methods: {
    handleSelected(date) {
      this.$emit("input", date);
    }
  },

  computed: {
    input_class() {
      let c = "form-control";
      if (this.errors && this.errors.length > 0) c += " is-invalid";
      return c;
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
