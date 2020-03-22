<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Add New Order
            </h1>
          </div>
          <div class="col-md-6 col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" v-for="(item, index) in breadcrumbLinks" :key="index">
                <router-link
                  :to="{name: item.pathName}"
                  :class="{'breadcrumb-item': true, 'active': item.isActive}"
                >{{item.title}}</router-link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <Card>
              <div slot="body">
                <TextBox
                  type="text"
                  id="agent"
                  label="Agent"
                  v-model="orderCreateForm.agent"
                  rules="required"
                />
                <TextBox
                  type="text"
                  id="order"
                  label="Order #"
                  v-model="orderCreateForm.order"
                  rules="required"
                />
                <Select
                  id="shipper"
                  label="Shipper"
                  :options="shipperOptions"
                  v-model="orderCreateForm.shipper"
                />
                <TextBox
                  type="text"
                  id="cod"
                  label="COD"
                  v-model="orderCreateForm.cod"
                  rules="required"
                />
                <TextArea
                  id="remark"
                  label="Remark"
                  v-model="orderCreateForm.remark"
                  rules="required"
                  rows="4"
                />
              </div>
            </Card>

            <CardWidget id="customer-details-card" class="card card-info">
              <div slot="title">Customer Details</div>
              <div slot="body">
                <TextBox
                  type="text"
                  id="customer-name"
                  label="Name"
                  v-model="orderCreateForm.customerDetails.name"
                  rules="required"
                />
                <TextArea
                  id="customer-address"
                  label="Address"
                  v-model="orderCreateForm.customerDetails.address"
                  rules="required"
                  rows="2"
                />
                <TextBox
                  type="text"
                  id="customer-postal-code"
                  label="Postal Code"
                  v-model="orderCreateForm.customerDetails.postalCode"
                  rules="required"
                />
                <Select
                  id="customer-district"
                  label="District"
                  :options="districtOptions"
                  v-model="orderCreateForm.customerDetails.district"
                />
                <Select
                  id="customer-province"
                  label="Province"
                  :options="provinceOptions"
                  v-model="orderCreateForm.customerDetails.province"
                />

                <TextBox
                  type="text"
                  id="customer-mobile"
                  label="Mobile"
                  v-model="orderCreateForm.customerDetails.mobile"
                  rules="required"
                />

                <TextBox
                  type="text"
                  id="customer-phone"
                  label="Phone"
                  v-model="orderCreateForm.customerDetails.phone"
                  rules="required"
                />

                <TextBox
                  type="text"
                  id="customer-email"
                  label="Email"
                  v-model="orderCreateForm.customerDetails.email"
                  rules="required"
                />
              </div>
            </CardWidget>
          </div>

          <div class="col-md-6 col-sm-12">
            <Card>
              <div slot="body">
                <p class="lead">List of Products</p>
              </div>
            </Card>

            <CardWidget id="customer-details-card" class="card card-info">
              <div slot="title">Order Details</div>
              <div slot="body">
                <TextBox
                  type="text"
                  id="order-ref-no"
                  label="Order Ref no."
                  v-model="orderCreateForm.orderDetails.orderRefNo"
                  rules="required"
                />

                <TextBox
                  type="text"
                  id="order-representative"
                  label="Representative"
                  v-model="orderCreateForm.orderDetails.representative"
                  rules="required"
                />

                <RadioGroup
                  id="order-shipper"
                  :options="orderDetailShipperOptions"
                  name="order-shipper"
                  label="Select Shipper"
                  v-model="orderCreateForm.orderDetails.shipper"
                  rules="required"
                />

                <TextBox
                  type="text"
                  id="order-cod"
                  label="COD"
                  v-model="orderCreateForm.orderDetails.cod"
                  rules="required"
                />

                <TextArea
                  id="ortder-additional-requirements"
                  label="Additional requirements"
                  v-model="orderCreateForm.orderDetails.additionalRequirements"
                  rules="required"
                  rows="4"
                />
                <FileUpload
                  :max_size="5"
                  upload_url="asdsad.com"
                  name="order-file"
                  label="Attach file"
                  v-model="orderCreateForm.orderDetails.file"
                />
              </div>
            </CardWidget>
          </div>
        </div>

        <!-- <div class="card">
          <div class="card-body">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="handleFormSubmit">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="item-code"
                      label="Item Code"
                      v-model="productCreateForm.itemCode"
                      rules="required"
                    />

                    <NumberField
                      id="cost"
                      label="Cost"
                      v-model.number="productCreateForm.cost"
                      rules="required"
                    />

                    <TextArea
                      id="description"
                      label="Description"
                      v-model="productCreateForm.description"
                      rules="required"
                      rows="4"
                    />

                    <CheckBoxGroup
                      id="has-variations"
                      :options="[{value:true, name:'This product has variations'}]"
                      v-model="productHasVariations"
                    />

                    <div v-if="productHasVariations">
                      <KeyValControls
                        :config="variationKeyValConfig"
                        v-model="productCreateForm.variations"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model.number="productCreateForm.salePrice"
                      rules="required"
                    />

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model.number="productCreateForm.weightApprox"
                      rules="required"
                    />

                    <div class="row">
                      <div class="col">
                        <Select
                          id="box-size"
                          label="Box Size"
                          :options="boxSizeOptions"
                          v-model="productCreateForm.boxSize"
                        />

                        <NumberField
                          v-if="productCreateForm.boxSize == 0"
                          id="custom-box-size"
                          placeholder="Custom box size"
                          rules="required"
                          v-model="productCreateForm.customBoxSize"
                        />
                      </div>
                      <div class="col">
                        <ImageUpload label="Image" custom_class="ml-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <hr />
                    <div class="d-flex mt-4 justify-content-center">
                      <button type="submit" class="btn btn-primary mr-4" :disabled="invalid">Submit</button>
                      <button type="button" class="btn btn-secondary" @click="cancel()">Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import TextBox from "@/components/core/TextBox";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import ImageUpload from "@/components/core/ImageUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import KeyValControls from "@/components/core/KeyValControls";
import CardWidget from "@/components/core/CardWidget.vue";
import RadioGroup from "@/components/core/RadioGroup";
import FileUpload from "@/components/core/FileUpload";

export default {
  name: "Seller-Order-Create",
  components: {
    Card,
    TextBox,
    NumberField,
    TextArea,
    ImageUpload,
    Select,
    CheckBoxGroup,
    KeyValControls,
    CardWidget,
    RadioGroup,
    FileUpload
  },
  data() {
    return {
      breadcrumbLinks: [
        {
          title: "Dashboard",
          isActive: false,
          pathName: "Seller-Dashboard"
        },
        {
          title: "Products",
          isActive: false,
          pathName: "Seller-Product-List"
        },
        {
          title: "New Product",
          isActive: true,
          pathName: "Seller-Product-Create"
        }
      ],

      orderCreateForm: {
        agent: null,
        orderCode: null,
        shipper: null,
        cod: null,
        remark: null,
        customerDetails: {
          name: null,
          address: null,
          postalCode: null,
          district: null,
          province: null,
          mobile: null,
          phone: null,
          email: null
        },
        orderDetails: {
          orderRefNo: null,
          representative: null,
          shipper: null,
          cod: null,
          additionalRequirements: null,
          file: null
        }
      },

      shipperOptions: [
        { name: "Shipper 1", value: 1 },
        { name: "Shipper 2", value: 2 },
        { name: "Shipper 3", value: 3 },
        { name: "Shipper 4", value: 4 },
        { name: "Shipper 5", value: 5 }
      ],

      districtOptions: [
        { name: "District 1", value: 1 },
        { name: "District 2", value: 2 },
        { name: "District 3", value: 3 },
        { name: "District 4", value: 4 },
        { name: "District 5", value: 5 }
      ],

      provinceOptions: [
        { name: "Province 1", value: 1 },
        { name: "Province 2", value: 2 },
        { name: "Province 3", value: 3 },
        { name: "Province 4", value: 4 },
        { name: "Province 5", value: 5 }
      ],

      orderDetailShipperOptions: [
        { label: "EMS", value: 1 },
        { label: "Register", value: 2 },
        { label: "Alpha", value: 3 },
        { label: "Messenger", value: 4 }
      ]
    };
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Order-List" });
    }
  }
};
</script>

<style>
</style>