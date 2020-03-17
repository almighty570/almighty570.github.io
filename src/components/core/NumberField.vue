<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <input
      type="number"
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

    value: {
      type: Number
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
