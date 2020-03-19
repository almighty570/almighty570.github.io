<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{label}}</label>

    <validation-provider :rules="rules" v-slot="{ errors }">
      <input
        :type="type"
        ref="input"
        class="form-control"
        :class="{'is-invalid': errors && errors.length}"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue()"
      />
      <template v-if="errors.length">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </template>
    </validation-provider>
  </div>
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
    },

    rules: {
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