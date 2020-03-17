<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <select class="form-control" :class="custom_class" ref="input" :id="id" @input="updateValue()">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{option.title}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    id: {
      type: String,
      required: true
    },

    custom_class: {
      type: String
    },

    value: {
      type: String
    },

    label: {
      type: String
    },

    options: {
      type: Array
    }
  },

  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
