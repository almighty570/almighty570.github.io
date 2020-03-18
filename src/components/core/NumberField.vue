<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>
    <input
      type="number"
      ref="input"
      class="form-control"
      :class="{'is-invalid': errors && errors.length}"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue()"
    />
    <template v-if="errors">
      <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
    </template>
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
    },

    errors: {
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
