<template>
  <div class="orders-page">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              {{$t('orders.create_edit.create_label')}}
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
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="handleFormSubmit">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <!-- Order Details -->
                <CardWidget id="order-details-card" class="card card-success">
                  <div slot="title">{{$t('orders.create_edit.card_order_title')}}</div>
                  <div slot="body">
                    <!-- Either Seller or Sales Agent is filled by default -->
                    <TextBox
                      label="User"
                      type="text"
                      size="sm"
                      id="user"
                      v-model="orderCreateForm.user"
                      :disabled="true"
                    />

                    <!-- Automatically generated -->
                    <TextBox
                      type="text"
                      id="order"
                      label="Order No #"
                      v-model="orderCreateForm.orderCode"
                      rules="required"
                      :disabled="true"
                    />
                    <Select
                      id="shipper"
                      label="Shipper"
                      :options="shipperOptions"
                      v-model="orderCreateForm.shipper"
                    />
                    <TextBox
                      type="text"
                      id="weight"
                      label="Weight"
                      v-model="orderCreateForm.weight"
                      rules="required"
                    />
                    <TextArea id="remark" label="Remark" v-model="orderCreateForm.remark" rows="3" />
                  </div>
                </CardWidget>
              </div>

              <div class="col-md-6 col-sm-12">
                <!-- Customer Details -->
                <CardWidget id="customer-details-card" class="card card-success">
                  <div slot="title">{{$t('orders.create_edit.card_customer_title')}}</div>
                  <div slot="body">
                    <!-- Either Mobile or Phone is required -->
                    <TextBoxAddon
                      type="number"
                      id="customer-mobile"
                      label="Mobile"
                      v-model="orderCreateForm.customerDetails.mobile"
                      :maxval="10"
                      :rules="'phone' + (orderCreateForm.customerDetails.phone ? '' : '|required')"
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
                          :rules="orderCreateForm.customerDetails.mobile ? '' : 'required'"
                        />
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <TextBox
                          type="text"
                          id="customer-email"
                          label="Email"
                          v-model="orderCreateForm.customerDetails.email"
                        />
                      </div>
                    </div>

                    <TextBox
                      type="text"
                      id="customer-name"
                      label="Name"
                      v-model="orderCreateForm.customerDetails.name"
                    />

                    <div class="row">
                      <div class="col">
                        <SmartAddress
                          id="customer-address"
                          label="Address"
                          v-model="orderCreateForm.customerDetails.address"
                          rules="required"
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>
                </CardWidget>
              </div>
            </div>

            <Card>
              <div slot="body">
                <div class="row">
                  <div class="col-md-6 col-sm-12 mb-4 mb-md-none">
                    <p
                      class="lead font-weight-normal"
                    >{{$t('orders.create_edit.card_product_title.all_products')}}</p>

                    <DataTable
                      id="show-products"
                      :columns="product.columns"
                      :rows="product.rows"
                      :per_page="5"
                      searchable
                      :search_fields="['item_code', 'product_code']"
                      sm
                    >
                      <div class="text-center" slot="actions" slot-scope="props">
                        <Button
                          :variant="'outline-success'"
                          size="sm"
                          custom_class="mr-1"
                          id="btn-action-detail"
                          @click="addProduct(props.props.rowData)"
                        >
                          <i class="fal fa-plus"></i>
                        </Button>
                      </div>
                    </DataTable>
                  </div>

                  <div class="col-md-6 col-sm-12">
                    <p
                      class="lead font-weight-normal"
                    >{{$t('orders.create_edit.card_product_title.selected_products')}}</p>

                    <table class="table table-bordered table-sm" v-if="selectedProductsCount">
                      <thead>
                        <th>{{$t('orders.create_edit.card_product_title.table.product_code')}}</th>
                        <th>{{$t('orders.create_edit.card_product_title.table.qty')}}</th>
                        <th>{{$t('orders.create_edit.card_product_title.table.action')}}</th>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(count, product_code) in product.selectedProducts"
                          :key="product_code"
                        >
                          <td>{{product_code}}</td>
                          <td>{{count}}</td>
                          <td>
                            <Button
                              :variant="'outline-success'"
                              size="sm"
                              :id="'btn-delete-product-' + product_code"
                              @click="removeProduct(product_code)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div
                      v-else
                      class="alert alert-warning"
                      role="alert"
                    >{{$t('orders.create_edit.card_product_title.no_products')}}</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <hr />
                    <div class="d-flex mt-4 justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success mr-4"
                        :disabled="invalid"
                      >{{$t('buttons.submit')}}</button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="cancel()"
                      >{{$t('buttons.cancel')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </form>
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
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
import Vue from "vue";
import { generateOrderCode } from "@/helpers/core";
import { mapGetters } from "vuex";
import SmartAddress from "@/components/derived/SmartAddress";

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
    RowControls,
    CardWidget,
    RadioGroup,
    FileUpload,
    DataTable,
    TextBoxAddon,
    Button,
    SmartAddress
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
        user: "Seller/Sales Agent Name",
        orderCode: "asdasdas",
        shipper: null,
        weight: null,
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

      agentOptions: [
        { name: "Agent 1", value: 1 },
        { name: "Agent 2", value: 2 },
        { name: "Agent 3", value: 3 },
        { name: "Agent 4", value: 4 },
        { name: "Agent 5", value: 5 }
      ],

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
            name: "item_code",
            title: "Item Code",
            sortField: "item_code"
          },

          {
            name: "product_code",
            title: "Product Code",
            sortField: "product_code"
          },
          "actions"
        ],
        rows: [
          {
            id: 1,
            item_code: "I-45424",
            product_code: "P-JI796"
          },

          {
            id: 2,
            item_code: "I-08243",
            product_code: "P-LOY479"
          },

          {
            id: 3,
            item_code: "I-0883427",
            product_code: "P-HJK4657"
          },

          {
            id: 4,
            item_code: "I-HVH564",
            product_code: "P-GFHG962"
          },

          {
            id: 5,
            item_code: "I-09354",
            product_code: "P-LXW594"
          },

          {
            id: 6,
            item_code: "I-6762KI",
            product_code: "P-BOS0385"
          }
        ],

        selectedProducts: {}
      }
    };
  },

  created() {
    this.orderCreateForm.orderCode = generateOrderCode(10);
    this.shipperOptions = this.shippingMethods.map(sm => {
      return { name: sm, value: sm };
    });
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Order-List" });
    },

    checkPhoneNo() {
      alert("Checking phone number for existing customer informations");
    },

    addProduct(product) {
      if (product.product_code in this.product.selectedProducts)
        Vue.set(
          this.product.selectedProducts,
          product.product_code,
          ++this.product.selectedProducts[product.product_code]
        );
      else Vue.set(this.product.selectedProducts, product.product_code, 1);
    },

    removeProduct(product_code) {
      if (product_code in this.product.selectedProducts) {
        Vue.set(
          this.product.selectedProducts,
          product_code,
          --this.product.selectedProducts[product_code]
        );
        if (this.product.selectedProducts[product_code] === 0)
          Vue.delete(this.product.selectedProducts, product_code);
      }
    }
  },

  computed: {
    ...mapGetters("onboard", ["shippingMethods"]),

    selectedProductsCount() {
      return Math.max(...Object.values(this.product.selectedProducts)) > 0;
    }
  }
};
</script>

<style>
</style>