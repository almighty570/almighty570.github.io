<template>
  <div class="container">
    <h3 class="text-center mb-4">Let us get your details</h3>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="handleFormSubmit">
        <!-- Shop Name && Phone Number -->
        <div class="row">
          <div class="col-md-6 sol-sm-12">
            <TextBox
              type="text"
              size="sm"
              id="shop-name"
              placeholder="Shop Name"
              rules="required"
              v-model="detailForm.name"
            />
          </div>

          <div class="col-md-6 sol-sm-12">
            <PhoneNumber
              placeholder="Shop Phone Number"
              id="shop-phone-number"
              rules="required"
              v-model="detailForm.phone"
            />
          </div>
        </div>

        <!-- Shipping Address && Zip Code -->
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <TextBox
              type="text"
              id="shipping-address"
              placeholder="Shipping from (address)"
              rules="required"
              v-model="detailForm.address"
            />
          </div>

          <div class="col">
            <TextBox
              type="text"
              id="zip-code"
              placeholder="Zip Code"
              rules="required"
              v-model="detailForm.zip"
            />
          </div>
        </div>

        <!-- District and SubDistrict -->
        <div class="row">
          <div class="col-6">
            <Select
              id="district"
              label="District"
              :options="districtOptions"
              v-model="detailForm.district"
            />
          </div>
          <div class="col-6">
            <Select
              id="sub-district"
              label="Sub-District"
              :options="subDistrictOptions"
              v-model="detailForm.subdistrict"
            />
          </div>
        </div>

        <Select
          id="province"
          label="Province"
          :options="provinceOptions"
          v-model="detailForm.province"
          rules="required"
        />

        <div class="text-center">
          <button type="submit" class="btn btn-success pl-4 pr-4" :disabled="invalid">Continue</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import TextBox from "@/components/core/TextBox";
import Select from "@/components/core/Select";
import PhoneNumber from "@/components/derived/PhoneNumber";
import { Alert } from "@/helpers/alert";
import Vue from "vue";
export default {
  name: "Onboard-Details",
  components: {
    TextBox,
    Select,
    Card,
    PhoneNumber,
    Alert
  },
  data() {
    return {
      detailForm: {
        name: null,
        phone: null,
        address: null,
        zip: null,
        district: null,
        subdistrict: null,
        province: null
      },
      districtOptions: [
        { name: "District 1", value: "District 1" },
        { name: "District 2", value: "District 2" },
        { name: "District 3", value: "District 3" },
        { name: "District 4", value: "District 4" },
        { name: "District 5", value: "District 5" }
      ],

      subDistrictOptions: [
        { name: "Sub District 1", value: "Sub District 1" },
        { name: "Sub District 2", value: "Sub District 2" },
        { name: "Sub District 3", value: "Sub District 3" },
        { name: "Sub District 4", value: "Sub District 4" },
        { name: "Sub District 5", value: "Sub District 5" }
      ],

      provinceOptions: [
        { name: "Province 1", value: "Province 1" },
        { name: "Province 2", value: "Province 2" },
        { name: "Province 3", value: "Province 3" },
        { name: "Province 4", value: "Province 4" },
        { name: "Province 5", value: "Province 5" }
      ]
    };
  },
  methods: {
    handleFormSubmit() {
      let data = {
        ...this.detailForm,        
      };
      this.$store.dispatch("onboard/storeDetails", {
        details: data,
        callback: data => {
          this.$router.push({ name: "Onboard-Options" });
        }
      });
    }
  }
};
</script>

<style>
/* .card-detail {
  height: 450px;
  width: 500px;
} */
</style>