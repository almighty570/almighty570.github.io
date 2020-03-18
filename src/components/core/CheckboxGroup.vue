<template>
  <div :id="id" class="form-group">
    <div class="checkbox-group-wrapper">
      <div v-for="(option,i) in options" :key="i" class="checbox">
        <input
          type="checkbox"
          :id="option.value"
          :value="option.value"
          v-model="checkedValues"
          @change="updateValue()"
        />
        <label :for="option.value">{{option.name}}</label>
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
    }
  },

  data: function() {
    return {
      checkedValues: []
    };
  },

  methods: {
    updateValue() {
      this.$emit("input", this.checkedValues);
    }
  }
};
</script>

<style>
.checkbox-group-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>