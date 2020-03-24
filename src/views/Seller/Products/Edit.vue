<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-md-6 col-sm-12">
            <h1 class="m-0 text-dark">
              <i class="nav-icon fal fa-arrow-circle-left mr-2 btn-back" @click="cancel()"></i>
              Edit Product
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
        <div class="card">
          <div class="card-body">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="handleFormSubmit">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <TextBox
                      type="text"
                      id="item-code"
                      label="Item Code(SKU)"
                      v-model="productEditForm.itemCode"
                      rules="required"
                    />

                    <NumberField
                      id="cost"
                      label="Cost"
                      v-model.number="productEditForm.cost"
                      rules="required"
                    />

                    <TextArea
                      id="description"
                      label="Description"
                      v-model="productEditForm.description"
                      rules="required"
                      rows="4"
                    />

                    <NumberField
                      id="sale-price"
                      label="Sale Price"
                      v-model.number="productEditForm.salePrice"
                      rules="required"
                    />

                    <NumberField
                      id="weight-approx"
                      label="Weight Approx"
                      v-model.number="productEditForm.weightApprox"
                      rules="required"
                    />

                    <CheckBoxGroup
                      id="has-variations"
                      :options="[{value:true, name:'This product has variations'}]"
                      :value="productHasVariations"
                      v-model="productHasVariations"
                    />
                    <div v-if="productHasVariations">
                      <RowControls
                        :config="variationKeyValConfig"
                        :value="productEditForm.variations"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="row">
                      <div class="col">
                        <Select
                          id="box-size"
                          label="Box Size"
                          :options="boxSizeOptions"
                          v-model="productEditForm.boxSize"
                        />

                        <NumberField
                          v-if="productEditForm.boxSize == 0"
                          id="custom-box-size"
                          placeholder="Custom box size"
                          rules="required"
                          v-model="productEditForm.customBoxSize"
                        />
                      </div>
                      <div class="col">
                        <ImageUpload label="Image" custom_class="ml-4" />
                      </div>
                    </div>

                    <RowControls
                      :config="dealPriceConfig"
                      :value="productEditForm.dealPrices"
                      title="Enter Deal Price"
                    />
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextBox from "@/components/core/TextBox";
import TextArea from "@/components/core/TextArea";
import NumberField from "@/components/core/NumberField";
import ImageUpload from "@/components/core/ImageUpload";
import Select from "@/components/core/Select";
import CheckBoxGroup from "@/components/core/CheckBoxGroup";
import RowControls from "@/components/core/RowControls";

export default {
  name: "Seller-Product-Edit",
  components: {
    TextBox,
    NumberField,
    TextArea,
    ImageUpload,
    Select,
    CheckBoxGroup,
    RowControls
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
          title: this.$route.params.id,
          isActive: true,
          pathName: "Seller-Product-Detail"
        },
        {
          title: "Edit",
          isActive: false,
          pathName: "Seller-Product-Edit"
        }
      ],

      productEditForm: {
        itemCode: null,
        description: null,
        stock: null,
        cost: null,
        salePrice: null,
        weightApprox: null,
        image: null,
        boxSize: null,
        customBoxSize: null,
        variations: null,
        dealPrices: null
      },

      boxSizeOptions: [
        { name: "Large", value: 1 },
        { name: "Small", value: 2 },
        { name: "Custom", value: 0 }
      ],
      productHasVariations: false,
      variationKeyValConfig: {
        key: {
          type: "text",
          rules: "required",
          id: "variation-name",
          label: "Name",
          placeholder: "Name"
        },
        val: {
          type: "text",
          id: "variation-value",
          label: "Value",
          placeholder: "Value"
        },
        hasControls: true
      },

      dealPriceConfig: {
        key: {
          type: "select",
          rules: "required",
          id: "deal-amount",
          placeholder: "Amount",
          options: [
            { name: "One", value: 1 },
            { name: "Two", value: 2 },
            { name: "Three", value: 3 }
          ]
        },
        val: {
          type: "number",
          id: "deal-price",
          rules: "required",
          placeholder: "Price"
        },
        hasControls: true
      }
    };
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    handleFormSubmit() {},

    cancel() {
      this.$router.push({ name: "Seller-Product-List" });
    },

    fetchProduct() {
      this.productEditForm = {
        itemCode: "123213",
        description: "descriptio ksdfa fas d as",
        stock: "asda",
        cost: 12312,
        salePrice: 234,
        weightApprox: 345.456,
        image: "asdasd",
        boxSize: 1,
        customBoxSize: null,
        variations: [
          {
            key: "key-1",
            val: "val-1"
          },
          {
            key: "key-2",
            val: "val-2"
          },
          {
            key: "key-3",
            val: "val-3"
          }
        ],
        dealPrices: [
          {
            key: 1,
            val: 100
          },
          {
            key: 2,
            val: 150
          },
          {
            key: 3,
            val: 200
          }
        ]
      };
      this.productHasVariations = true;
    }
  }
};
</script>

<style>
</style>