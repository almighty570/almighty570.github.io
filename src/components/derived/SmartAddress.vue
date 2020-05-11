<template>
  <div class="form-group">
    <ValidationProvider :rules="rules" v-slot="{errors}">
      <TextArea
        wrapper_class="mb-1"
        :placeholder="placeholder"
        :id="id"
        :label="label"
        @input="emitUpdate()"
        @keydown="watchChanges()"
        :rows="rows"
        :cols="cols"
        v-model="address"
      />
      <div class="template-error d-flex justify-content-between">
        <!-- Error or Value -->
        <template v-if="errors && errors.length">
          <span class="text-danger text-sm" v-for="(error, index) in errors" :key="index">{{error}}</span>
        </template>
        <span v-else-if="state === 2" class="text-sm mr-4" v-html="parsedAddress"></span>

        <!-- parsing message -->
        <span v-if="state === 1" class="text-info text-sm ml-auto">
          <i class="fal fa-sync-alt mr-1"></i>
          Parsing
        </span>
        <span v-if="state === 2" class="text-success text-sm ml-auto">
          <i class="fas fa-check-circle mr-1"></i>
          Parsed
        </span>
        <span v-if="state === 3" class="text-warning text-sm ml-auto">
          <i class="fas fa-exclamation-circle mr-1"></i>
          Not recognized
        </span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import TextArea from "@/components/core/TextArea";
import { http } from "@/helpers/http";

export default {
  name: "SmartAddress",
  components: { TextArea },
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
    },
    rows: {
      type: String
    },

    cols: {
      type: String
    }
  },

  data() {
    return {
      parseTimer: null,
      state: 0, //0: initial, 1: parsing, 2: success, 3: error
      address: null,
      parsedAddress: null
    };
  },

  created() {
    this.address = this.value;
    this.parsedAddress = this.value;
    this.emitUpdate();
  },

  methods: {
    emitUpdate(value) {
      this.$emit("input", value || this.address);
    },

    watchChanges() {
      clearTimeout(this.parseTimer);
      this.parseTimer = setTimeout(() => {
        this.parseAddress();
        clearTimeout(this.parseTimer);
      }, 500);
    },

    parseAddress() {
      if (!this.address) {
        this.state = 0;
        return;
      }
      this.state = 1;
      let url =
        "https://iwjkvg2m94.execute-api.ap-southeast-1.amazonaws.com/dev/parse-address?text=" +
        this.address;
      http.get(url).then(response => {
        let d = response.data;
        let matchCondition =
          d.zipcodeMatched &&
          d.provinceMatched &&
          d.districtMatched &&
          d.subdistrictMatched;

        if (matchCondition) {
          this.state = 2;
          this.parsedAddress = `Province: ${d.provinceName} <br>District: ${d.districtName} <br>Sub-district: ${d.subdistrictName} <br>Zip-code: ${d.zipcode}`;
          this.emitUpdate(this.parsedAddress);
        } else this.state = 3;
      });
    }
  },

  watch: {
    value: function(newVal, oldVal) {
      this.address = newVal;
      this.parsedAddress = newVal;
      this.emitUpdate();
    }
  }
};
</script>

<style>
</style>