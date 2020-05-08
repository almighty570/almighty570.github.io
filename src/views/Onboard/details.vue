<template>
  <div class="container">
    <h3 class="text-center">Let us get your details</h3>
    <br />
    <br />
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
        address: null
      }
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
    }
  },

  computed: {
    ...mapGetters("user", ["registrationData"])
  }
};
</script>