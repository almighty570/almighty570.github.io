<template>
  <div id="account-form">
    <Card>
      <div slot="body">
               <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="handleFormSubmit">
                <!-- Name & Email -->
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="account-name"
                      label="Company  Name"
                      v-model="accountSettingsForm.name"
                      rules="required"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="email"
                      id="account-email"
                      label="Email"
                      v-model="accountSettingsForm.email"
                      rules="required"
                    />
                  </div>
                </div>

                <!-- Phone Line Id -->
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <PhoneNumber
                      id="account-phone-no"
                      label="Phone No."
                      v-model="accountSettingsForm.phoneNo"
                      rules="required"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="account-address"
                      label="Address"
                      v-model="accountSettingsForm.address"
                      rules="required"
                    />
                  </div>
                </div>

          
                <!-- Submit & Cancel Buttons -->
                <div class="row">
                  <div class="col text-center">
                    <hr />
                    <div class="d-flex mt-4 justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-primary btn-md mr-4"
                        :disabled="invalid"
                      >Update</button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-md"
                        @click="cancel()"
                      >Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import TextBox from "@/components/core/TextBox";
import PhoneNumber from "@/components/derived/PhoneNumber";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "SellerSettingsAccount",
  components: {
    Card,
    TextBox,
    PhoneNumber
  },
   computed: {
    ...mapGetters("onboard", ["details", "product", "shippingMethods"])
    
  },
  created(){
        this.accountSettingsForm.name=this.details.name;
        this.accountSettingsForm.email=this.details.email;
        this.accountSettingsForm.phoneNo=this.details.phone;
        this.accountSettingsForm.address=this.details.address;
        console.log(this.details);
  },
  data() {
    return {
      accountSettingsForm:{
          name:null,
          email:null,
          phoneNo:null,
          address:null
      }
    };
  },
mounted(){
  
 
},
  methods: {
    handleFormSubmit() {
      let data = {
        ...this.accountSettingsForm,        
      };
      this.$store.dispatch("onboard/storeDetails", {
        details: data,
        callback: data => {
          this.$router.push({ name: "Seller-Settings-Shops" });
        }
      });
    }
      }
};
</script>

<style lang="scss" scoped>
.setting__header {
  font-weight: bold;
  font-size: 18px;
}
.setting__description {
  font-weight: thin;
  font-size: 13px;
}

.setting {
  &.--inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.--table {
    .setting__text {
      margin-bottom: 20px;
    }
  }

  margin-bottom: 30px;
}

.settings-wrapper {
  margin-top: 24px;
}

.setting-status-tag {
  text-transform: uppercase;

  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 2px;
  text-align: center;
  width: 68px;
  height: 29px;

  &.--warning {
    background-color: #ffc107;
    color: black;
  }

  &.--success {
    background-color: #28a745;
    color: white;
  }

  &.--danger {
    background-color: #dc3545;
    color: white;
  }

  &.--info {
    background-color: #007bff;
    color: white;
  }
}
</style>