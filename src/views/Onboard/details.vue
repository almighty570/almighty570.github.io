<template>
  <div>
    <h1>Details</h1>
    <ValidationObserver>
      <div class="container">
        <Card class="card-detail">
          <div slot="body">
            <form  @submit.prevent="handleFormSubmit">              
                <div class="row">
                  <div class="col">
                    <TextBox
                      type="text"
                      id="shop-name"
                      label="Shop Name"
                      rules="required"
                      v-model="detailForm.name"
                    />
                    <NumberField
                      label="Shop Phone Number"
                      id="shop-phone-number"
                      v-model.number="detailForm.phone"
                    />
                    <TextBox
                      type="text"
                      id="shipping-address"
                      label="Your Shipping Address ('From')"
                      rules="required"
                      v-model="detailForm.address"
                    />
                    <TextBox
                      type="text"
                      id="zip-code"
                      label="Zip Code"
                      rules="required"
                      v-model="detailForm.zip"
                    />
                  </div>
                  <div class="col">
                    <Select
                      id="district"
                      label="District"
                      :options="districtOptions"
                      v-model="detailForm.district"
                    />
                    <Select
                      id="sub-district"
                      label="Sub-District"
                      :options="subDistrictOptions"
                      v-model="detailForm.subdistrict"
                    />
                    <Select
                      id="province"
                      label="Province"
                      :options="provinceOptions"
                      v-model="detailForm.province"
                    />
                    
                  </div>
               
                </div>
               
              <div class="row">
                  <button type="submit" class="btn btn-success">Options</button>
               </div>
            </form>
          </div>
        </Card>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import TextBox from "@/components/core/TextBox";
import Select from "@/components/core/Select";
import NumberField from "@/components/core/NumberField";
import Vue from "vue";
export default {
  name: "Onboard-Details",
  components: {
    TextBox,
    NumberField,
    Select,
    Card
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
        { name: "District 1", value: 1 },
        { name: "District 2", value: 2 },
        { name: "District 3", value: 3 },
        { name: "District 4", value: 4 },
        { name: "District 5", value: 5 }
      ],

      subDistrictOptions: [
        { name: "Sub District 1", value: 1 },
        { name: "Sub District 2", value: 2 },
        { name: "Sub District 3", value: 3 },
        { name: "Sub District 4", value: 4 },
        { name: "Sub District 5", value: 5 }
      ],

      provinceOptions: [
        { name: "Province 1", value: 1 },
        { name: "Province 2", value: 2 },
        { name: "Province 3", value: 3 },
        { name: "Province 4", value: 4 },
        { name: "Province 5", value: 5 }
      ]
    };
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
   }

};
</script>

<style>
.card-detail {
  height: 450px;
  width: 500px;
}
</style>