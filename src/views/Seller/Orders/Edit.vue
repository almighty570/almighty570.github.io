<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Edit Order
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
                <TextBoxAddon
                  type="text"
                  id="customer-mobile"
                  label="Mobile"
                  v-model="orderCreateForm.customerDetails.mobile"
                  rules="required"
                  addon_btn_text="Check"
                  @addonClicked="checkPhoneNo()"
                />

                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="customer-phone"
                      label="Phone"
                      v-model="orderCreateForm.customerDetails.phone"
                      rules="required"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="customer-email"
                      label="Email"
                      v-model="orderCreateForm.customerDetails.email"
                      rules="required"
                    />
                  </div>
                </div>

                <TextBox
                  type="text"
                  id="customer-name"
                  label="Name"
                  v-model="orderCreateForm.customerDetails.name"
                  rules="required"
                />

                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextArea
                      id="customer-address"
                      label="Address"
                      v-model="orderCreateForm.customerDetails.address"
                      rules="required"
                      rows="5"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="customer-postal-code"
                      label="Postal Code"
                      v-model="orderCreateForm.customerDetails.postalCode"
                      rules="required"
                    />
                    <Select
                      id="customer-province"
                      label="Province"
                      :options="provinceOptions"
                      v-model="orderCreateForm.customerDetails.province"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <Select
                      id="customer-district"
                      label="District"
                      :options="districtOptions"
                      v-model="orderCreateForm.customerDetails.district"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <Select
                      id="customer-sub-district"
                      label="Sub-District"
                      :options="subDistrictOptions"
                      v-model="orderCreateForm.customerDetails.subDistrict"
                    />
                  </div>
                </div>
              </div>
            </CardWidget>
          </div>

          <div class="col-md-6 col-sm-12">
            <Card>
              <div slot="body">
                <p class="lead">List of Products</p>
                <DataTable
                  id="show-products"
                  :columns="product.columns"
                  :rows="product.rows"
                  responsive
                  custom_class="table-sm"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import TextBox from "@/components/core/TextBox";
import TextBoxAddon from "@/components/core/TextBoxAddon";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import ImageUpload from "@/components/core/ImageUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";
import CardWidget from "@/components/core/CardWidget.vue";
import RadioGroup from "@/components/core/RadioGroup";
import FileUpload from "@/components/core/FileUpload";
import DataTable from "@/components/core/DataTable";

export default {
  name: "Seller-Order-Edit",
  components: {
    Card,
    TextBox,
    NumberField,
    TextArea,
    ImageUpload,
    Select,
    CheckBoxGroup,
    RowControls,
    CardWidget,
    RadioGroup,
    FileUpload,
    DataTable,
    TextBoxAddon
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
          title: "Orders",
          isActive: false,
          pathName: "Seller-Orders-List"
        },
        {
          title: this.$route.params.id,
          isActive: true,
          pathName: "Seller-Order-Detail"
        },
        {
          title: "Edit",
          isActive: false,
          pathName: "Seller-Order-Edit"
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
          subDistrict: null,
          province: null,
          mobile: null,
          phone: null,
          email: null
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
      ],

      product: {
        columns: [
          {
            title: "Sn",
            render: (data, type, row, meta) => {
              return meta.row;
            }
          },
          {
            title: "Product Code"
          },
          {
            title: "Add",
            render: data => {
              let f = this.cancel;
              return `
                <button class="btn btn-sm btn-outline-success></button>"
              `;
            }
          }
        ],
        rows: [
          [1, "P-232b23", 1],
          [2, "P-0234fgh", 2],
          [3, "P-023423sdf", 3],
          [4, "P-086dfdf", 4],
          [5, "P-6575v", 5]
        ]
      }
    };
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Order-List" });
    },

    checkPhoneNo() {
      alert("Checking phone number for existing customer informations");
    }
  }
};
</script>

<style>
</style>