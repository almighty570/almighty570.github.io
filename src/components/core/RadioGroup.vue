<template>
  <div class="form-group">
    <div class="radio-wrapper">
      <validation-provider :rules="rules" v-slot="{ errors }">
        <div v-for="(option,i) in options" :key="i" class="radio-item">
          <input
            type="radio"
            ref="input"
            :id="option.value"
            :value="option.value"
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

    name: {
      type: String,
      required: true
    },

    rules: String
  },

  data: function() {
    return {
      radioValue: null
    };
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
