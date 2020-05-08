<template>
  <div v-bind:class="{'wrapper_class':true, 'form-group':(!derived)}">
    <label v-if="label" :for="id">{{label}}</label>

    <validation-provider :rules="rules" v-slot="{ errors }">
      <input
        v-on:keypress="limitKeypress(value, maxval)"
        :type="type"
        ref="input"
        class="form-control"
        :class="{'is-invalid': errors && errors.length}"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue()"
        @change="handleChange()"
        :disabled="disabled"
      />
      <template v-if="errors.length">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </template>
    </validation-provider>
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
    maxval: {
      type: Number
    },
    value: {
      type: String
    },
    derived: {
      type: Boolean
    },
    label: {
      type: String
    },

    placeholder: {
      type: String
    },

    rules: {
      type: String
    },

    wrapper_class: {
      type: String
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    },

    handleChange() {
      this.$emit("change", this.$refs.input.value);
    },

    limitKeypress(value, maxLength) {
      if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
      }
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