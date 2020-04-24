<template>
  <div class="form-group">
    <ValidationProvider rules="max|start" v-slot="{errors}">
      <TextBox
        :derived="true"
        type="Number"
        :maxval="10"
        :placeholder="placeholder"
        :id="id"
        :label="label"
        v-model="phone"
      />
      <div class="template-error" >
        <span class="text-danger  text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
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
    }
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