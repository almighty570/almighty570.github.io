<template>
  <div class="phone-wrapper">
    <ValidationProvider rules="max|start" v-slot="{errors}">
      <NumberField :maxval="10" type="text" id="phone-number" label="Phone Number" v-model="phone" />
      <template v-if="errors.length">
        <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
      </template>
    </ValidationProvider>
  </div>
</template>

<script>
import NumberField from "@/components/core/NumberField";
import { extend } from "vee-validate";
import { ValidationProvider } from "vee-validate";
export default {
  name: "PhoneNumber",
  components: {
    NumberField,
    ValidationProvider
  },
  data() {
    return {
      phone: null
    };
  },
  mounted() {
    extend("max", value => {
      if (value.length <= 10) {
        return true;
      }

      return "This field can have maximum 10 digits.";
    });
    extend("start", value => {
      if (value[0] == "0") {
        return true;
      }

      return "This field must start with 0.";
    });
  },
  methods: {}
};
</script>

<style>
</style>