<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>
    <div class="radio-wrapper">
      <validation-provider :rules="rules" v-slot="{ errors }">
        <div v-for="(option,i) in options" :key="i" class="radio-item">
          <input
            type="radio"
            ref="input"
            :id="id + '-' + i"
            :name="name"
            v-model="radioValue"
            @change="updateValue()"
          />
          <label :for="option.value">{{option.label}}</label>
        </div>
        <template v-if="errors">
          <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
        </template>
      </validation-provider>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: {
    options: {
      type: Array,
      required: true
    },

    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    value: {
      type: String
    },

    label: {
      type: String
    },

    rules: String
  },

  data: function() {
    return {
      radioValue: null
    };
  },

  created() {
    if (this.value) this.radioValue = this.value;
  },

  methods: {
    updateValue() {
      this.$emit("input", this.radioValue);
    }
  }
};
</script>

<style scoped lang="scss">
.radio-wrapper {
  display: flex;
  justify-content: space-between;
}

.radio-wrapper input {
  margin-right: 5px;
}
</style>
