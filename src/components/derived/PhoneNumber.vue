<template>
  <div class="form-group">
    <ValidationProvider :rules="'phone|' + rules" v-slot="{errors}">
      <TextBox
        :derived="true"
        type="Number"
        :maxval="10"
        :placeholder="placeholder"
        :id="id"
        :value="value"
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
import TextBox from "@/components/core/TextBox";
import { extend } from "vee-validate";
import { ValidationProvider } from "vee-validate";
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
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    id: {
      type: String
    },
    rules: {
      type: String,
      default: ""
    }
  },

  created() {
    // debugger;
    this.phone = this.value;
    this.emitUpdate();
  },

  data() {
    return {
      phone: null
    };
  },

  methods: {
    emitUpdate() {
      this.$emit("input", this.phone);
    }
  },

  watch: {
    value: function(newVal, oldVal) {
      // debugger;
      this.phone = newVal;
      this.emitUpdate();
    }
  }
};
</script>

<style>
</style>