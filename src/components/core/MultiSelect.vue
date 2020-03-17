<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <multiselect
      ref="input"
      :value="value"
      :options="options"
      @input="updateValue"
      :multiple="multiple"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "MultiSelect",
  components: { Multiselect },
  props: {
    id: {
      type: String,
      required: true
    },


    value: {
      type: [String, Array]
    },

    label: {
      type: String
    },

    options: {
      type: Array
    },

    multiple: {
      type: Boolean
    }
  },

  methods: {
    updateValue(value) {
      // console.log(this.$refs.input.value);
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
