<template>
  <div v-if="shops">
    <div v-for="(shop,index) in shops" :key="index">
      <CardWidget id="order-details-card" class="card-info">
        <div slot="title">{{shop.shopName}}</div>
        <div slot="body">
          <div class="toolbar mb-2 d-flex">
            <div class="ml-auto">
              <Button
                class="mr-2"
                type="button"
                data-toggle="modal"
                data-target=".shopModal"
                @click="editItem(shop.id)"
                variant="outline-primary"
                size="sm"
              >Edit</Button>
              <Button
                type="button"
                @click="deleteItem(shop.id)"
                variant="outline-danger"
                size="sm"
              >Delete</Button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Address</label>
              <p v-html="shop.address"></p>
            </div>
            <div class="col">
              <label>Shipper</label>
              <br />
              {{shop.shippingMethods.join(", ")}}
              <br />
              <br />
              <label>Phone</label>
              <br />
              {{shop.phone}}
            </div>
          </div>
        </div>
      </CardWidget>
    </div>

    <div class="text-center mt-4">
      <Button
        id="btn-cancel"
        type="button"
        variant="info"
        data-toggle="modal"
        data-target=".shopModal"
        size="sm"
      >
        <i class="mr-2 fal fa-store-alt"></i>Add New Shop
      </Button>
    </div>

    <Modal class="shopModal">
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
                  :value="addShopForm.phone"
                  v-model="addShopForm.phone"
                />
              </div>
            </div>

            {{addShopForm.phone}}

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

            <div class="row">
              <div class="col">
                <label>Choose Shipping Methods</label>
                <ShippingMethodInput  v-model="addShopForm.shippingMethods" variant="info" size="sm" wrapper_class="mt-2 mb-2" />
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <Button
                custom_class="pl-4 pr-4"
                type="submit"
                id="btn-add-shop"
                size="sm"
                :disabled="invalid"
                variant="info"
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
import ShippingMethodInput from "@/components/derived/ShippingMethodInput";
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
    SmartAddress,
    ShippingMethodInput
  },
  computed: {
    ...mapGetters("shops", ["shops"])
  },
  created() {
   
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
        province: null,
        shippingMethods: []
      }
    };
  },

  methods: {
    handleFormSubmit() {
         let data = {
        ...this.addShopForm,
        id: Math.floor(Math.random() * 101)
      };
       this.$store.dispatch("shops/createShop", {
        shop: data
      });
     
    },
    editItem(id){
      this.$store.dispatch("shops/fetchShopDetail", {
       id: id,          
       callback: data => {
          this.addShopForm = data;      
          console.log(this.addShopForm.phone);
        }     
      });
    },
    deleteItem(id){
      Alert(
        "Delete",
        "Are you sure you want to delete this item ?",
        null,
        () => {
           this.$store.dispatch("shops/deleteShop", {
            id: id,            
      });
     
        }
      );
     
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