<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <select ref="input" class="form-control" :id="id" @change="updateValue()">
      <option
        v-for="(option,i) in options"
        :key="i"
        :value="option.value"
        :selected="value && value === option.value"
      >{{option.name}}</option>
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

    options: {
      type: Array,
      required: true
    },

    label: {
      type: String
    },

    value: {
      type: null
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
