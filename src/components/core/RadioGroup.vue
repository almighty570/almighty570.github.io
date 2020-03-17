<template>
  <div class="form-group">
    <div class="radio-wrapper">
      <div v-for="(option,i) in options" :key="i" class="radio-item">
        <input
          type="radio"
          ref="input"
          :id="option.value"
          :value="option.value"
          :name="name"
          v-model="radio_value"
          @input="updateValue()"
        />
        <label :for="option.value">{{option.label}}</label>
      </div>
    </div>
  </div>
</template>``

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
    }
  },

  data: function() {
    return {
      radio_value: null
    };
  },

  methods: {
    updateValue() {
      this.$emit("input", this.radio_value);
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
  width: 20px;
  height: 1em;
}
</style>
