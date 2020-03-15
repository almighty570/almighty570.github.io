<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <input
      :type="type"
      ref="input"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue()"
    />
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    id: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    },

    value: {
      type: String
    },

    label: {
      type: String
    },

    placeholder: {
      type: String
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
