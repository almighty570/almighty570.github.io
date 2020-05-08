<template>
  <div>
    <CardWidget id="order-details-card" class="card-info">
      <div slot="title">{{details.shopName}}</div>
      <div slot="body">
        <div class="row">
          <div class="col">
            <label>Address</label>
            <p v-html="details.address"></p>
          </div>
          <div class="col">
            <label>Shipper</label>
            <br />
            {{shippingMethods.join(", ")}}
            <br />
            <br />
            <label>Phone</label>
            <br />
            {{details.phone}}
          </div>
        </div>
      </div>
    </CardWidget>

    <div class="text-center">
      <Button
        id="btn-cancel"
        type="button"
        variant="info"
        data-toggle="modal"
        data-target="#addShopModal"
        size="sm"
      >
        <i class="mr-2 fal fa-store-alt"></i>Add New Shop
      </Button>
    </div>
    <Modal id="addShopModal">
      <template slot="header">
        <h5 class="modal-title" id="addShopModalLabel">
          <i class="mr-2 fal fa-store-alt"></i>Add New Shop
        </h5>
      </template>

      <template slot="body">
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
                  v-model="addShopForm.shopName"
                />
              </div>

              <div class="col-md-6 sol-sm-12">
                <PhoneNumber
                  label="Shop Phone Number"
                  placeholder="Shop Phone Number"
                  id="shop-phone-number"
                  rules="required"
                  v-model="addShopForm.phone"
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
                  v-model="addShopForm.address"
                  rows="3"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <Button
                type="submit"
                id="btn-add-shop"
                size="sm"
                :disabled="invalid"
                variant="primary"
              >Add shop</Button>
            </div>
          </form>
        </ValidationObserver>
      </template>
    </Modal>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import CardWidget from "@/components/core/CardWidget";
import Button from "@/components/core/Button";
import TextBox from "@/components/core/TextBox";
import Select from "@/components/core/Select";
import PhoneNumber from "@/components/derived/PhoneNumber";
import Modal from "@/components/core/Modal";
import { mapGetters } from "vuex";
import { Alert } from "@/helpers/alert";
import SmartAddress from "@/components/derived/SmartAddress";

export default {
  name: "SellerSettingsShops",
  components: {
    Card,
    Button,
    CardWidget,
    TextBox,
    Select,
    PhoneNumber,
    Modal,
    SmartAddress
  },
  computed: {
    ...mapGetters("onboard", ["details", "product", "shippingMethods"])
  },
  created() {
    console.log(this.details);
  },
  data() {
    return {
      addShopForm: {
        name: null,
        phone: null,
        address: null,
        zip: null,
        district: null,
        subdistrict: null,
        province: null
      }
    };
  },

  methods: {
    
    handleFormSubmit() {
      let data = {
        ...this.addShopForm
      };
      this.$store.dispatch("onboard/storeDetails", {
        details: data
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
}
</style>