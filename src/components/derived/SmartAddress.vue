<template>
  <div class="form-group">
    <ValidationProvider :rules="rules" v-slot="{errors}">
      <TextArea
        :placeholder="placeholder"
        :id="id"
        :label="label"
        @input="emitUpdate()"
        v-model="phone"
      />
      <div class="template-error">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import TextArea from "@/components/core/TextArea";

export default {
  name: "PhoneNumber",
  components: {
    TextBox,
    ValidationProvider
  },
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    id: {
      type: String
    },
    value: {
      type: null
    },
    rules: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      address: null
    };
  },

  created() {
    this.address = this.value;
    this.emitUpdate();
  },

  methods: {
    emitUpdate() {
      this.$emit("input", this.address);
    }
  }
};
</script>

<style>
</style>