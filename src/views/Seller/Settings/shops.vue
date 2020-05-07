<template>
  <div>
    <Card>
      <div slot="body">
        <div class="text-center">
          <h5>Manage Shops</h5>
        </div>
        <CardWidget id="order-details-card" class="card card-primary">
          <div slot="title">{{details.name}}</div>
          <div slot="body">
            <div class="row">
              <div class="col-6">
                <table>
                  <tbody>
                    <tr>
                      <th>Shop Address:</th>
                      <td>{{details.address}}</td>
                    </tr>
                    <tr>
                      <th>Shipping:</th>
                      <td>
                        <span v-for="(ship,index) in shippingMethods" :key="index">{{ship.name}},</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{{details.phone}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardWidget>
      </div>
    </Card>
    <div class="text-center">
      <Button
        id="btn-cancel"
        type="button"
        variant="primary"
        data-toggle="modal"
        data-target="#addShopModal"
        size="sm"
      >
        Add New Shop
        <i class="mr-1 ml-2 mt-1 fas fa-plus"></i>
      </Button>
    </div>
    <Modal id="addShopModal">
      <template slot="header">
        <h5 class="modal-title" id="addShopModalLabel">
          <i class="mr-1 ml-2 mt-1 fas fa-shopping-basket"></i>Add New Shop
        </h5>
      </template>

      <template slot="body">
        <p class="lead">Please add your shop by filling up the details as follows:</p>

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
                  v-model="addShopForm.name"
                />
              </div>

              <div class="col-md-6 sol-sm-12">
                <PhoneNumber
                  placeholder="Shop Phone Number"
                  id="shop-phone-number"
                  rules="required"
                  v-model="addShopForm.phone"
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
                  v-model="addShopForm.address"
                />
              </div>

              <div class="col">
                <TextBox
                  type="text"
                  id="zip-code"
                  placeholder="Zip Code"
                  rules="required"
                  v-model="addShopForm.zip"
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
                  v-model="addShopForm.district"
                />
              </div>
              <div class="col-6">
                <Select
                  id="sub-district"
                  label="Sub-District"
                  :options="subDistrictOptions"
                  v-model="addShopForm.subdistrict"
                />
              </div>
            </div>

            <Select
              id="province"
              label="Province"
              :options="provinceOptions"
              v-model="addShopForm.province"
              rules="required"
            />

            <hr />
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary btn-sm mr-2" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success btn-sm" :disabled="invalid">Submit</button>
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

export default {
  name: "SellerSettingsShops",
  components: {
    Card,
    Button,
    CardWidget,
    TextBox,
    Select,
    PhoneNumber,
    Modal
  },
  computed: {
    ...mapGetters("onboard", ["details", "product", "shippingMethods"])
  },
  created() {
    console.log(this.shippingMethods);
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
        ...this.addShopForm,        
      };
      this.$store.dispatch("onboard/storeDetails", {
        details: data,
        
      });
      Alert(
        null,
        "Added a new shop",
        () => {
          $("#addShopModal").modal("hide");
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