<template>
  <div :id="id" class="form-group">
    <div class="checkbox-group-wrapper">
      <validation-provider :rules="rules" v-slot="{ errors }">
        <div v-for="(option,i) in options" :key="i" class="checkbox">
          <input
            type="checkbox"
            :id="option.value"
            :value="option.value"
            v-model="checkedValues"
            @change="updateValue()"
          />
          <label class="checkbox" :for="option.value">{{option.name}}</label>
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
  name: "CheckBoxGroup",
  props: {
    options: {
      type: Array,
      required: true
    },

    id: {
      type: String,
      required: true
    },
    rules: String
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

.checkbox input {
  margin-right: 5px;
}

.checkbox label {
  font-weight: 400;
  cursor: pointer;
}
</style>