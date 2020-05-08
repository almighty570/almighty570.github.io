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
              label="Shop Name"
              placeholder="Shop Name"
              rules="required"
              v-model="detailForm.shopName"
            />
          </div>

          <div class="col-md-6 sol-sm-12">
            <PhoneNumber
              label="Shop Phone Number"
              placeholder="Shop Phone Number"
              id="shop-phone-number"
              rules="required"
              v-model="detailForm.phone"
            />
          </div>
        </div>

        <!-- Shipping Address && Zip Code -->
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <SmartAddress
              label="Address"
              placeholder="Shipping address"
              id="shipping-address"
              rules="required"
              v-model="detailForm.address"
              rows="3"
            />
          </div>
        </div>

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
import SmartAddress from "@/components/derived/SmartAddress";
import { Alert } from "@/helpers/alert";
import Vue from "vue";
import TextArea from "@/components/core/TextArea";
import { http } from "@/helpers/http";
import { mapGetters } from "vuex";

export default {
  name: "Onboard-Details",
  components: {
    TextBox,
    Select,
    Card,
    PhoneNumber,
    SmartAddress
  },
  data() {
    return {
      detailForm: {
        shopName: null,
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

  created() {
    this.detailForm.shopName = this.registrationData.name;
    this.detailForm.phone = this.registrationData.phone;
  },

  methods: {
    handleFormSubmit() {
      let data = {
        ...this.detailForm
      };
      this.$store.dispatch("onboard/storeDetails", {
        details: data,
        callback: data => {
          this.$router.push({ name: "Onboard-Options" });
        }
      });
    },

    handleAddressInput() {
      let url =
        "https://iwjkvg2m94.execute-api.ap-southeast-1.amazonaws.com/dev/parse-address?text=" +
        this.detailForm.address;
      http.get(url).then(response => {
        let d = response.data;
        if (d.zipcodeMatched) this.detailForm.zipcode = d.zipcode;
        if (d.provinceMatched) this.detailForm.province = d.provinceName;
        if (d.districtMatched) this.detailForm.district = d.districtName;
        if (d.subdistrictMatched)
          this.detailForm.subdistrict = d.subdistrictName;
      });
    }
  },

  computed: {
    ...mapGetters("user", ["registrationData"])
  }
};
</script>

<style>
/* .card-detail {
  height: 450px;
  width: 500px;
} */
</style>