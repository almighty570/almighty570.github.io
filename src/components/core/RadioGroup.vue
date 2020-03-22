<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>
    <div class="radio-wrapper">
      <div v-for="(option,i) in options" :key="i" class="radio-item">
        <input
          type="radio"
          ref="input"
          :id="id + '-' + i"
          :name="name"
          v-model="radioValue"
          @change="updateValue()"
        />
        <label :for="id + '-' + i">{{option.label}}</label>
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
    }
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
