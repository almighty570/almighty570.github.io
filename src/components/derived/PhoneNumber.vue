<template>
  <div class="form-group">
    <ValidationProvider :rules="'phone|' + rules" v-slot="{errors}">
      <TextBox
        :derived="true"
        type="Number"
        :maxval="10"
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

  created() {
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
  }

  // mounted() {
  //   extend("min", value => {
  //     if (value.length !== 10) return "Phone number must have 10 digits.";
  //     return true;
  //   });
  //   extend("start", value => {
  //     if (value[0] !== "0") return "Phone number must start with 0.";
  //     return true;
  //   });
  // }
};
</script>

<style>
</style>