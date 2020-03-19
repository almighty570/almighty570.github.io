<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>

    <validation-provider :rules="rules" v-slot="{ errors }">
      <textarea
        ref="input"
        class="form-control"
        :class="{'is-invalid': errors && errors.length}"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue()"
        :rows="rows"
        :cols="cols"
      ></textarea>
      <template v-if="errors.length">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </template>
    </validation-provider>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    id: {
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
    },

    rules: {
      type: String
    },

    rows: {
      type: String
    },

    cols: {
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