<template>
  <div class="form-group">
    <div class="radio-wrapper">
      <div v-for="(option,i) in options" :key="i" class="radio-item">
        <input
          type="radio"
          ref="input"
          :id="option.value"
          :name="name"
          :value="value"
          v-model="radioValue"
          @change="updateValue()"
        />
        <label :for="option.value">{{option.label}}</label>
      </div>
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

    value: {
      type: String
    }
  },

  data: function() {
    return {
      radioValue: null
    };
  },

  created() {
    this.radioValue = value;
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
