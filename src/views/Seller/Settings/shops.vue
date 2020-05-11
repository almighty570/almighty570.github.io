<template>
  <div v-if="shops">
    <div v-for="(shop,index) in shops" :key="index">
      <CardWidget :id="'shop-details-' + index" class="card-info">
        <div slot="title">{{shop.shopName}}</div>
        <div slot="body">
          <div class="toolbar d-flex mt-n2">
            <div class="ml-auto">
              <Button
                class="mr-2"
                type="button"
                data-toggle="modal"
                data-target=".shopModal"
                @click="editItem(shop.id)"
                variant="outline-primary"
                size="sm"
              >
                <i class="fal fa-pen"></i>
              </Button>
              <Button type="button" @click="deleteItem(shop.id)" variant="outline-danger" size="sm">
                <i class="fal fa-trash"></i>
              </Button>
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
        id="btn-add-new-shop"
        type="button"
        variant="info"
        data-toggle="modal"
        data-target=".shopModal"
        @click="handleAddForm()"
        size="sm"
      >
        <i class="mr-2 fal fa-store-alt"></i>Add New Shop
      </Button>
    </div>

    <Modal class="shopModal">
      <template slot="header">
        <h5 class="modal-title" id="addShopModalLabel">
          <i class="mr-2 fal fa-store-alt"></i>
          <span v-if="formMode === 0">Add New Shop</span>
          <span v-else-if="formMode === 1">Edit Shop</span>
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
                  v-model="shopForm.shopName"
                />
              </div>

              <div class="col-md-6 sol-sm-12">
                <PhoneNumber
                  label="Shop Phone Number"
                  placeholder="Shop Phone Number"
                  id="shop-phone-number"
                  rules="required"
                  :value="shopForm.phone"
                  v-model="shopForm.phone"
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
                  :value="shopForm.address"
                  v-model="shopForm.address"
                  rows="3"
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label>Choose Shipping Methods</label>
                <ShippingMethodInput
                  :values="shopForm.shippingMethods"
                  v-model="shopForm.shippingMethods"
                  variant="info"
                  size="sm"
                  wrapper_class="mt-2 mb-2"
                />
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
              >
                <span v-if="formMode === 0">Add shop</span>
                <span v-if="formMode === 1">Update shop</span>
              </Button>
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
  created() {},
  data() {
    return {
      formMode: 0, //0: create, 1: edit
      shopForm: null
    };
  },

  created() {
    this.initForm();
  },

  methods: {
    initForm() {
      this.shopForm = {
        name: null,
        phone: null,
        address: null,
        zip: null,
        district: null,
        subdistrict: null,
        province: null,
        shippingMethods: []
      };
    },

    handleFormSubmit() {
      if (this.formMode === 0) {
        // create
        let data = {
          ...this.shopForm,
          id: Math.floor(Math.random() * 101)
        };
        this.$store.dispatch("shops/createShop", {
          shop: data,
          callback: () => {
            $(".shopModal").modal("hide");
          }
        });
      } else if (this.formMode === 1) {
        this.$store.dispatch("shops/updateShop", {
          id: this.shopForm.id,
          shop: this.shopForm,
          callback: () => {
            $(".shopModal").modal("hide");
            this.initForm();
          }
        });
      }
    },

    handleAddForm() {
      this.formMode = 0;
      this.initForm();
    },

    editItem(id) {
      this.formMode = 1;
      this.$store.dispatch("shops/fetchShopDetail", {
        id: id,
        callback: data => {
          this.shopForm = JSON.parse(JSON.stringify(data));
          console.log(this.shopForm);
        }
      });
    },

    deleteItem(id) {
      let deleteMsg = "Are you sure you want to delete this item ?";
      Alert("Delete", deleteMsg, null, () => {
        this.$store.dispatch("shops/deleteShop", {
          id: id
        });
      });
    },

    setFormMode(mode) {
      this.formMode = mode;
    }
  }
};
</script>

<style lang="scss" scoped>
// .setting__header {
//   font-weight: bold;
//   font-size: 18px;
// }
// .setting__description {
//   font-weight: thin;
//   font-size: 13px;
// }

// .setting {
//   &.--inline {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   &.--table {
//     .setting__text {
//       margin-bottom: 20px;
//     }
//   }

//   margin-bottom: 30px;
// }

// .settings-wrapper {
//   margin-top: 24px;
// }

// .setting-status-tag {
//   text-transform: uppercase;

//   font-weight: bold;
//   font-size: 12px;
//   padding: 5px 10px;
//   border-radius: 2px;
//   text-align: center;
//   width: 68px;
//   height: 29px;
// }
</style>