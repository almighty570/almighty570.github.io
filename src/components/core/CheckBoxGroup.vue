<template>
  <div :id="id" class="form-group">
    <div class="checkbox-group-wrapper">
      <div v-for="(option,i) in options" :key="i" class="checkbox">
        <input
          type="checkbox"
          :id="id"
          :value="option.value"
          v-model="checkedValues"
          @change="updateValue()"
        />
        <label class="checkbox" :for="option.value">{{option.name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBoxGroup",
  props: {
    options: {
      type: Array,
      required: true
    },

    id: {
      type: String,
      required: true
    }
  },

  data: function() {
    return {
      checkedValues: []
    };
  },

  methods: {
    updateValue() {
      let valueToReturn =
        this.checkedValues.length === 0
          ? this.checkedValues[0]
          : this.checkedValues;
      this.$emit("input", valueToReturn);
    }
  }
};
</script>

<style>
.checkbox-group-wrapper {
  display: flex;
  justify-content: space-between;
}

.checkbox input {
  margin-right: 5px;
}

.checkbox label {
  font-weight: 400;
  cursor: pointer;
}
</style>